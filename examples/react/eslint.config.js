import { eslintReact } from '@tinyforged/lint-kit';

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  { languageOptions: { globals: { window: 'readonly', document: 'readonly', navigator: 'readonly' } } },
  ...eslintReact,
];