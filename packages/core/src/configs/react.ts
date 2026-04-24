import reactPlugin from '@eslint-react/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

import { GLOB_SRC, GLOB_TSX } from '../globs';
import type { TypedFlatConfigItem } from '../types';

export function react(
  options: { overrides?: any; typescript?: boolean } = {},
): TypedFlatConfigItem[] {
  return [
    {
      name: 'kit/react/setup',
      plugins: {
        'react-x': reactPlugin as any,
      },
    },
    {
      name: 'kit/react/parser',
      files: [GLOB_SRC],
      languageOptions: {
        parser: tsParser as any,
        parserOptions: {
          ecmaFeatures: { jsx: true },
          ecmaVersion: 2022,
          sourceType: 'module',
        },
      },
    },
    {
      name: 'kit/react/rules',
      files: [GLOB_TSX],
      rules: {
        'react-x/rules-of-hooks': 'error',
        'react-x/dom-no-missing-button-type': 'error',
        'react-x/no-missing-key': 'error',
        'react-x/jsx-no-comment-textnodes': 'error',
        'react-x/no-duplicate-key': 'error',
        'react-x/dom-no-unsafe-target-blank': 'error',
        'react-x/jsx-no-children-prop': 'error',
        'react-x/dom-no-dangerously-set-innerhtml-with-children': 'error',
        'react-x/no-direct-mutation-state': 'error',
        'react-x/dom-no-find-dom-node': 'error',
        'react-x/dom-no-render-return-value': 'error',
        'react-x/no-create-ref': 'error',
        'react-x/dom-no-unknown-property': 'error',
        ...options.overrides,
      },
    },
  ];
}
