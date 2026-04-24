import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { reactRules } from '../eslint/rules/react';
import { eslintBase } from './base';

const tsParserCjs = require('@typescript-eslint/parser');

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

export default eslintReact;
