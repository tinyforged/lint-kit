import { eslintVue } from '@tinyforged/lint-kit';

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  ...eslintVue,
];