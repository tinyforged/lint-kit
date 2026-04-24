import vuePlugin from 'eslint-plugin-vue';

import { vueRules } from '../eslint/rules/vue';
import { eslintBase } from './base';

const vueParserCjs = require('vue-eslint-parser');
const tsParserCjs = require('@typescript-eslint/parser');

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

export default eslintVue;
