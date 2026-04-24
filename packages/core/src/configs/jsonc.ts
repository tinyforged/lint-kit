import { GLOB_JSON, GLOB_JSONC } from '../globs';
import type { TypedFlatConfigItem } from '../types';

export function jsonc(): TypedFlatConfigItem[] {
  return [
    {
      name: 'kit/jsonc/rules',
      files: [GLOB_JSON, GLOB_JSONC],
      rules: {
        'no-json-parse-without-try-catch': 'off',
      },
    },
  ];
}
