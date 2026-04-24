import sveltePlugin from 'eslint-plugin-svelte';

import { svelteRules } from '../eslint/rules/svelte';
import { eslintBase } from './base';

const svelteParser = require('svelte-eslint-parser');
const tsParserCjs = require('@typescript-eslint/parser');

export const eslintSvelte = [
  ...eslintBase,
  ...sveltePlugin.configs['flat/recommended'],
  ...sveltePlugin.configs['flat/prettier'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        parser: tsParserCjs as any,
      },
    },
    rules: {
      ...svelteRules,
    },
  },
];

export default eslintSvelte;
