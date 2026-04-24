import { eslintVue } from './vue';

export const eslintNuxt: any[] = [
  ...eslintVue,
  {
    files: ['**/*.{js,jsx,ts,tsx}', '**/*.vue'],
    rules: {
      'no-undef': 'off', // Nuxt auto-imports
      'vue/multi-word-component-names': 'off', // Nuxt pages
    },
  },
];

export default eslintNuxt;
