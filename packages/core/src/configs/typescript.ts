import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

import { GLOB_SRC, GLOB_TS } from '../globs';
import type { TypedFlatConfigItem } from '../types';

export function typescript(
  options: { overrides?: any; type?: 'app' | 'lib' } = {},
): TypedFlatConfigItem[] {
  return [
    {
      name: 'kit/typescript/setup',
      plugins: {
        '@typescript-eslint': tsPlugin as any,
      },
    },
    {
      name: 'kit/typescript/parser',
      files: [GLOB_SRC],
      languageOptions: {
        parser: tsParser as any,
        parserOptions: {
          ecmaVersion: 2022,
          sourceType: 'module',
        },
      },
    },
    {
      name: 'kit/typescript/rules',
      files: [GLOB_TS],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-empty-object-type': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            vars: 'all',
            varsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          { classes: true, functions: false, variables: true },
        ],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        ...options.overrides,
      },
    },
  ];
}
