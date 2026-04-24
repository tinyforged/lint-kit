import tsParser from '@typescript-eslint/parser';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

import { svelteRules } from '../eslint/rules/svelte';
import { eslintBase } from './base';

export const eslintSvelte: any[] = [
  ...eslintBase,
  ...sveltePlugin.configs['flat/recommended'],
  ...sveltePlugin.configs['flat/prettier'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        parser: tsParser as any,
      },
    },
    rules: {
      ...svelteRules,
    },
  },
];

export default eslintSvelte;
