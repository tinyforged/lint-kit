import tsParser from '@typescript-eslint/parser';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

import { GLOB_SRC, GLOB_VUE } from '../globs';
import type { TypedFlatConfigItem } from '../types';

export function vue(
  options: { overrides?: any; stylistic?: boolean; typescript?: boolean } = {},
): TypedFlatConfigItem[] {
  return [
    {
      name: 'kit/vue/setup',
      plugins: {
        vue: vuePlugin as any,
      },
    },
    {
      name: 'kit/vue/parser',
      files: [GLOB_SRC, GLOB_VUE],
      languageOptions: {
        parser: vueParser as any,
        parserOptions: {
          ecmaVersion: 2022,
          parser: tsParser as any,
          sourceType: 'module',
        },
      },
    },
    {
      name: 'kit/vue/rules',
      files: [GLOB_VUE],
      rules: {
        'vue/attribute-hyphenation': 'error',
        'vue/multi-word-component-names': 'warn',
        'vue/no-mutating-props': 'warn',
        'vue/no-v-html': 'off',
        'vue/prop-name-casing': 'error',
        'vue/require-default-prop': 'off',
        'vue/require-explicit-emits': 'error',
        'vue/v-slot-style': [
          'error',
          { atComponent: 'shorthand', default: 'shorthand', named: 'shorthand' },
        ],
        'vue/valid-define-emits': 'error',
        'vue/valid-define-props': 'error',
        ...options.overrides,
      },
    },
  ];
}
