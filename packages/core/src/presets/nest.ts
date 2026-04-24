import { eslintBase } from './base';

export const eslintNest: any[] = [
  ...eslintBase,
  {
    files: ['**/*.ts'],
    rules: {
      'explicit-function-return-type': 'off',
      'explicit-module-boundary-types': 'off',
      'interface-name-prefix': 'off',
      'no-explicit-any': 'off',
    },
  },
];

export default eslintNest;
