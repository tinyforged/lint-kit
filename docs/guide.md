# User Guide

`lint-kit` is an all-in-one linting suite providing presets for various frameworks.

## Installation

```bash
npm install @tinyforged/lint-kit --save-dev
```

## Usage

### ESLint

Since version 1.0.3, `lint-kit` exports specific presets for ESLint Flat Config (`eslint.config.js`).

#### Basic (JS/TS)

```js
import { eslintBase } from '@tinyforged/lint-kit/base';

export default [
  ...eslintBase,
];
```

#### React

```js
import { eslintReact } from '@tinyforged/lint-kit/react';

export default [
  ...eslintReact,
];
```

#### Vue 3

```js
import { eslintVue } from '@tinyforged/lint-kit/vue';

export default [
  ...eslintVue,
];
```

#### Next.js

```js
import { eslintNext } from '@tinyforged/lint-kit/next';

export default [
  ...eslintNext,
];
```

#### Nuxt.js

```js
import { eslintNuxt } from '@tinyforged/lint-kit/nuxt';

export default [
  ...eslintNuxt,
];
```

#### Svelte

```js
import { eslintSvelte } from '@tinyforged/lint-kit/svelte';

export default [
  ...eslintSvelte,
];
```

#### NestJS

```js
import { eslintNest } from '@tinyforged/lint-kit/nest';

export default [
  ...eslintNest,
];
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

Create `.commitlintrc.js`:

```js
const { commitlint } = require('@tinyforged/lint-kit');
module.exports = commitlint;
```
