# User Guide

`lint-kit` is an all-in-one linting suite with auto-detection for your project's framework.

## Installation

```bash
npm install @tinyforged/lint-kit --save-dev
```

## Usage

### ESLint

Create `eslint.config.js` in your project root:

```js
import { defineConfig } from '@tinyforged/lint-kit';

export default defineConfig();
```

`defineConfig()` automatically detects installed frameworks (React, Vue, Svelte, TypeScript) and enables the appropriate rules. No manual framework selection needed.

#### Options

```js
import { defineConfig } from '@tinyforged/lint-kit';

export default defineConfig({
  // Project type: 'app' (default) or 'lib'
  type: 'lib',

  // Disable auto-detection and manually control features
  autoDetect: false,
  typescript: true,
  react: true,
  vue: true,
  svelte: true,

  // Enable code style rules
  stylistic: { indent: 2, quotes: 'single', semi: true },

  // Add custom ignores
  ignores: ['**/generated/**'],

  // Override rules for specific features
  overrides: {
    typescript: { '@typescript-eslint/no-explicit-any': 'warn' },
    react: { 'react-x/rules-of-hooks': 'warn' },
  },

  // Pass additional ESLint flat config items
}, {
  name: 'my-project/custom',
  rules: { 'no-console': 'warn' },
});
```

#### Feature-Specific Options

```js
// TypeScript
defineConfig({
  typescript: {
    componentExts: ['vue', 'svelte'],
    overrides: { '@typescript-eslint/no-explicit-any': 'off' },
  },
});

// React
defineConfig({
  react: {
    overrides: { 'react-x/dom-no-unsafe-target-blank': 'off' },
  },
});

// Vue
defineConfig({
  vue: {
    overrides: { 'vue/no-v-html': 'off' },
  },
});
```

### Prettier

Create `.prettierrc.js`:

```js
const { prettier } = require('@tinyforged/lint-kit');
module.exports = prettier;
```

### Stylelint

Create `.stylelintrc.js`:

```js
const { stylelint } = require('@tinyforged/lint-kit');
module.exports = stylelint;
```

### Commitlint

Create `commitlint.config.js`:

```js
import { commitlint } from '@tinyforged/lint-kit';
export default commitlint;
```
