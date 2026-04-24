import { defineConfig } from '../dist/index.mjs';

export default defineConfig(
  {
    autoDetect: false,
    vue: true,
    typescript: true,
  },
  {
    name: 'kit/nuxt/overrides',
    files: ['**/*.vue'],
    rules: {
      'no-undef': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
);
