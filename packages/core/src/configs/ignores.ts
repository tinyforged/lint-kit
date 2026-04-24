import type { TypedFlatConfigItem } from '../types';

export function ignores(custom: string[] = []): TypedFlatConfigItem {
  return {
    name: 'kit/ignores',
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/es',
      '**/lib',
      '**/coverage',
      '**/.coverage',
      '**/.output',
      '**/.nuxt',
      '**/.next',
      '**/.vitepress/cache',
      '**/.vitepress/dist',
      '**/CHANGELOG.md',
      '**/*.min.*',
      ...custom,
    ],
  };
}
