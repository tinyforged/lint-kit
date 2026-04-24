import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import-x';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicornPlugin from 'eslint-plugin-unicorn';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';

import { GLOB_SRC } from '../globs';
import type { TypedFlatConfigItem } from '../types';

const unicornRecommendedRules = (unicornPlugin as any)?.configs?.recommended?.rules ?? {};

export function javascript(): TypedFlatConfigItem[] {
  return [
    js.configs.recommended,
    {
      name: 'kit/javascript/rules',
      files: [GLOB_SRC],
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.node,
          ...globals.es2022,
        },
        sourceType: 'module',
      },
      plugins: {
        'import-x': importPlugin as any,
        'simple-import-sort': simpleImportSort as any,
        'unicorn': unicornPlugin as any,
        'unused-imports': unusedImportsPlugin as any,
      },
      rules: {
        ...unicornRecommendedRules,

        'array-callback-return': 'error',
        'eqeqeq': 'error',
        'for-direction': 'error',
        'guard-for-in': 'error',
        'no-async-promise-executor': 'error',
        'no-case-declarations': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-dupe-else-if': 'error',
        'no-duplicate-case': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-global-assign': 'error',
        'no-invalid-regexp': 'error',
        'no-param-reassign': 'error',
        'no-promise-executor-return': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'error',
        'no-useless-catch': 'error',
        'no-useless-escape': 'error',
        'no-var': 'error',
        'no-with': 'error',
        'require-yield': 'error',
        'use-isnan': 'error',

        'no-empty': 'warn',
        'no-extra-boolean-cast': 'off',
        'no-unused-vars': 'off',

        'import-x/first': 'error',
        'import-x/newline-after-import': 'error',
        'import-x/no-duplicates': 'error',

        'simple-import-sort/exports': 'error',

        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
        ],

        'unicorn/catch-error-name': 'warn',
        'unicorn/explicit-length-check': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/import-style': 'off',
        'unicorn/no-anonymous-default-export': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-empty-file': 'warn',
        'unicorn/no-negated-condition': 'off',
        'unicorn/no-nested-ternary': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-typeof-undefined': 'warn',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-code-point': 'off',
        'unicorn/prefer-logical-operator-over-ternary': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-number-properties': 'off',
        'unicorn/prefer-query-selector': 'off',
        'unicorn/prefer-spread': 'off',
        'unicorn/prefer-string-raw': 'off',
        'unicorn/prefer-string-replace-all': 'warn',
        'unicorn/prefer-ternary': 'off',
        'unicorn/prefer-type-error': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/switch-case-braces': 'warn',
      },
    },
  ];
}
