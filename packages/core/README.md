# @tinyforged/lint-kit

A systematic upgrade to the frontend linting suite: ESLint + Prettier + Stylelint + Commitlint + Semantic Release.

This package provides modern (ESLint v9 flat config), framework-specific (React, Vue, Next.js, Nuxt.js, Svelte, NestJS) presets and optimized defaults.

## Documentation

- [User Guide & Examples](../../docs/guide.md)

## Features

- **Framework Presets**: Dedicated ESLint flat configs for React, Vue 3, Next.js, Nuxt.js, Svelte, and NestJS.
- **Modern Stack**: Support for ESLint v9, Stylelint v16, Prettier v3.
- **Unified config**: Easy exports for Prettier, Stylelint, Commitlint, and Semantic Release.
- **Enhanced Stylelint**: Supports Less and CSS-in-JS parsers (`postcss-less`, `postcss-styled-syntax`).
- **Gitmoji & Semantic Release**: Built-in support for gitmoji conventions and automatic relesaes.

## Installation

```bash
pnpm add -D @tinyforged/lint-kit
```

## Quick Start (ESLint)

In `eslint.config.js`:

```javascript
import { eslintBase } from '@tinyforged/lint-kit/base';

// or specific frameworks:
// import { eslintReact } from '@tinyforged/lint-kit/react';
// import { eslintVue } from '@tinyforged/lint-kit/vue';
// import { eslintNext } from '@tinyforged/lint-kit/next';
// import { eslintNuxt } from '@tinyforged/lint-kit/nuxt';
// import { eslintSvelte } from '@tinyforged/lint-kit/svelte';
// import { eslintNest } from '@tinyforged/lint-kit/nest';

export default [{ ignores: ['dist', 'node_modules'] }, ...eslintBase];
```

For other tools (Prettier, Stylelint, Commitlint), see the [Guide](./docs/guide.md).

## License

MIT © TinyForged
