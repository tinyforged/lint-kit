import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import-x';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
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

const unicornRecommendedRules = (unicornPlugin as any)?.configs?.recommended?.rules ?? {};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const eslintBase: any[] = [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      parser: tsParser as any,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin as any,
      'import-x': importPlugin as any,
      'simple-import-sort': simpleImportSort as any,
      'sort-keys-fix': sortKeysFix as any,
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
