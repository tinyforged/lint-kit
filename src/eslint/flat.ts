// ESLint v9 Flat Config 入口
// 将原有 eslintrc 风格的预设迁移为 Flat Config 数组
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import unicornPlugin from 'eslint-plugin-unicorn';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import vuePlugin from 'eslint-plugin-vue';

import {
  commonRules,
  importRules,
  overrideRules,
  sortingRules,
  typescriptRules,
  unicornRules,
  unusedImportRules,
} from './rules';
import { reactRules } from './rules/react';
import { vueRules } from './rules/vue';

// Use require to ensure CJS export is passed as plain object
const vueParserCjs = require('vue-eslint-parser');
// Use require to ensure parser is loaded as CJS object

const tsParserCjs = require('@typescript-eslint/parser');
// Use require to ensure CJS export is passed as plain object

const importPluginCjs = require('eslint-plugin-import');

const unicornRecommendedRules = (unicornPlugin as any)?.configs?.recommended?.rules ?? {};

export const eslintBase = [
  // 等价于 "eslint:recommended"
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        __dirname: 'readonly',
        module: 'readonly',
        process: 'readonly',
        require: 'readonly',
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
      // 等价于 "plugin:unicorn/recommended"
      ...unicornRecommendedRules,
      // 项目规则集合
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

export const eslintReact = [
  ...eslintBase,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParserCjs as any,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      'react': reactPlugin as any,
      'react-hooks': reactHooksPlugin as any,
    },
    rules: {
      ...reactRules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

export const eslintVue = [
  ...eslintBase,
  {
    files: ['**/*.{js,jsx,ts,tsx}', '**/*.vue'],
    languageOptions: {
      parser: vueParserCjs as any,
      parserOptions: {
        ecmaVersion: 2020,
        parser: tsParserCjs as any,
        sourceType: 'module',
      },
    },
    plugins: {
      vue: vuePlugin as any,
    },
    rules: {
      ...vueRules,
    },
  },
];

export default eslintReact;
