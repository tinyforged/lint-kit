import { eslintBase } from '@tinyforged/lint-kit';

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  ...eslintBase,
];