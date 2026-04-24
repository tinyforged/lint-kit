import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import unicornPlugin from 'eslint-plugin-unicorn';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';

import {
  commonRules,
  importRules,
  overrideRules,
  sortingRules,
  typescriptRules,
  unicornRules,
  unusedImportRules,
} from '../eslint/rules';

const tsParserCjs = require('@typescript-eslint/parser');
const importPluginCjs = require('eslint-plugin-import');

const unicornRecommendedRules = (unicornPlugin as any)?.configs?.recommended?.rules ?? {};

export const eslintBase = [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parser: tsParserCjs as any,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin as any,
      'import': importPluginCjs as any,
      'simple-import-sort': simpleImportSort as any,
      'sort-keys-fix': sortKeysFix as any,
      'typescript-sort-keys': typescriptSortKeys as any,
      'unicorn': unicornPlugin as any,
      'unused-imports': unusedImportsPlugin as any,
    },
    rules: {
      ...unicornRecommendedRules,
      ...commonRules,
      ...typescriptRules,
      ...overrideRules,
      ...importRules,
      ...sortingRules,
      ...unicornRules,
      ...unusedImportRules,
    },
  },
];

export default eslintBase;
