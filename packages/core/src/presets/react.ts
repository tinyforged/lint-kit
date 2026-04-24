import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { reactRules } from '../eslint/rules/react';
import { eslintBase } from './base';

export const eslintReact: any[] = [
  ...eslintBase,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser as any,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2022,
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

export default eslintReact;
