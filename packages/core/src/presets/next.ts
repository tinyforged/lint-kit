import nextPlugin from '@next/eslint-plugin-next';

import { eslintReact } from './react';

export const eslintNext: any[] = [
  ...eslintReact,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin as any,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
];

export default eslintNext;
