import type { Linter } from 'eslint';

import type { OptionsConfig } from './types';

export function isInEditorEnv(): boolean {
  if (process.env.CI) return false;
  return !!(
    process.env.VSCODE_PID ||
    process.env.VSCODE_CWD ||
    process.env.JETBRAINS_IDE ||
    process.env.VIM ||
    process.env.NVIM
  );
}

export function resolveSubOptions<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
): OptionsConfig[K] extends boolean ? never : NonNullable<OptionsConfig[K]> {
  const sub = options[key];
  if (typeof sub === 'boolean') return {} as any;
  return (sub ?? {}) as any;
}

export function getOverrides(options: OptionsConfig, key: keyof OptionsConfig): Linter.RulesRecord {
  const sub = resolveSubOptions(options, key) as { overrides?: Linter.RulesRecord };
  return {
    ...(options.overrides as any)?.[key],
    ...sub?.overrides,
  };
}
