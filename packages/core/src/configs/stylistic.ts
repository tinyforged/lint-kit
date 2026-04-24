import { GLOB_SRC } from '../globs';
import type { StylisticOptions, TypedFlatConfigItem } from '../types';

export function stylistic(options: StylisticOptions = {}): TypedFlatConfigItem[] {
  const { indent = 2, quotes = 'single', semi = true } = options;

  return [
    {
      name: 'kit/stylistic/rules',
      files: [GLOB_SRC],
      rules: {
        indent: ['error', indent, { SwitchCase: 1 }],
        quotes: ['error', quotes, { allowTemplateLiterals: true, avoidEscape: true }],
        semi: ['error', semi],
      },
    },
  ];
}
