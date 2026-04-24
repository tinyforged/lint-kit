# @tinyforged/lint-kit

A systematic upgrade to the frontend linting suite: ESLint + Prettier + Stylelint + Commitlint + Semantic Release.

This package provides modern (ESLint v10 flat config), auto-detecting, framework-specific configurations with a clean factory API.

## Documentation

- [User Guide & Examples](../../docs/guide.md)

## Features

- **Auto-Detection**: Automatically detects React, Vue, Nuxt, TypeScript, Svelte from your dependencies.
- **Factory API**: `defineConfig()` with typed options for fine-grained control.
- **Modern Stack**: ESLint v10, Stylelint v17, Prettier v3, Commitlint v20.
- **Unified Config**: Easy exports for Prettier, Stylelint, Commitlint, and Semantic Release.
- **Enhanced Stylelint**: Supports Less and CSS-in-JS parsers (`postcss-less`, `postcss-styled-syntax`).
- **Gitmoji & Semantic Release**: Built-in support for gitmoji conventions and automatic releases.

## Installation

```bash
pnpm add -D @tinyforged/lint-kit
```

## Quick Start

In `eslint.config.js`:

```javascript
import { defineConfig } from '@tinyforged/lint-kit';

export default defineConfig();
```

That's it — `defineConfig()` auto-detects your installed frameworks and configures everything.

For advanced usage and other tools (Prettier, Stylelint, Commitlint), see the [Guide](../../docs/guide.md).

## License

MIT © TinyForged
