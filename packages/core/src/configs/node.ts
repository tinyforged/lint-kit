import { GLOB_NODE_SCRIPTS } from '../globs';
import type { TypedFlatConfigItem } from '../types';

export function node(): TypedFlatConfigItem[] {
  return [
    {
      name: 'kit/node/rules',
      files: GLOB_NODE_SCRIPTS,
      languageOptions: {
        globals: {
          __dirname: 'writable',
          __filename: 'writable',
          module: 'writable',
          require: 'writable',
        } as any,
        sourceType: 'commonjs',
      },
      rules: {
        'no-console': 'off',
        'unicorn/no-useless-undefined': 'off',
      },
    },
  ];
}
