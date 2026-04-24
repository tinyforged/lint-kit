import tsParser from '@typescript-eslint/parser';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

import { vueRules } from '../eslint/rules/vue';
import { eslintBase } from './base';

export const eslintVue: any[] = [
  ...eslintBase,
  {
    files: ['**/*.{js,jsx,ts,tsx}', '**/*.vue'],
    languageOptions: {
      parser: vueParser as any,
      parserOptions: {
        ecmaVersion: 2022,
        parser: tsParser as any,
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

export default eslintVue;
