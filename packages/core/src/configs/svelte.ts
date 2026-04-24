import tsParser from '@typescript-eslint/parser';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

import { GLOB_SVELTE } from '../globs';
import type { TypedFlatConfigItem } from '../types';

export function svelte(): TypedFlatConfigItem[] {
  return [
    ...(sveltePlugin.configs['flat/recommended'] as TypedFlatConfigItem[]),
    ...(sveltePlugin.configs['flat/prettier'] as TypedFlatConfigItem[]),
    {
      name: 'kit/svelte/parser',
      files: [GLOB_SVELTE],
      languageOptions: {
        parser: svelteParser as any,
        parserOptions: {
          extraFileExtensions: ['.svelte'],
          parser: tsParser as any,
        },
      },
    },
    {
      name: 'kit/svelte/rules',
      files: [GLOB_SVELTE],
      rules: {
        'svelte/no-at-html-tags': 'warn',
      },
    },
  ];
}
