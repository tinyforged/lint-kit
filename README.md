# @tinyforged/lint-kit

一键集成的前端 Lint 套件：ESLint + Prettier + Stylelint + Commitlint + Semantic Release。

适配现代版本（ESLint v9、Stylelint v16、Prettier v3），并内置 React/Vue/TS 常用规则与发布流程。

## 特性

- 统一的预设与入口：`eslint`、`prettier`、`stylelint`、`commitlint`、`semanticRelease`、`semanticReleaseMonoRepo`。
- 现代版本兼容：ESLint v9、Stylelint v16、Prettier v3。
- 覆盖 Less 与 CSS-in-JS 的 Stylelint 解析（`postcss-less`、`postcss-styled-syntax`）。
- Gitmoji 风格的 commit 校验与自动化发布配置（支持 monorepo）。

## 环境要求

- Node：`>= 18.18.0`
- ESLint：`>= 9`（作为 peer 依赖，消费项目需使用 v9 或更高）

## 安装

使用 pnpm：

```bash
pnpm add -D @tinyforged/lint-kit
```

## 快速开始

在消费项目根目录创建以下配置文件，直接引用本库的预设：

```js
// eslint.config.js（ESLint v9 唯一入口）
import { eslint as eslintConfig } from '@tinyforged/lint-kit';

export default [
  // 忽略项（取代 .eslintignore）
  { ignores: ['dist/**', 'coverage/**'] },
  // 套件提供的 Flat Config 预设（数组）
  ...eslintConfig,
];

// .prettierrc.js
module.exports = require('@tinyforged/lint-kit').prettier;

// .stylelintrc.js
module.exports = require('@tinyforged/lint-kit').stylelint;

// .commitlintrc.js
module.exports = require('@tinyforged/lint-kit').commitlint;

// .releaserc.js（单仓库）
module.exports = require('@tinyforged/lint-kit').semanticRelease;

// .releaserc.js（monorepo）
module.exports = require('@tinyforged/lint-kit').semanticReleaseMonoRepo;
```

### ESLint v9（按需选择 React/Vue/Base）

如果需要区分不同框架：

```js
// eslint.config.js
import { eslintBase, eslintReact, eslintVue } from '@tinyforged/lint-kit';

export default [
  { ignores: ['dist/**', 'coverage/**'] },
  // 任选其一，或按项目合并
  ...eslintBase,
  // ...eslintReact,
  // ...eslintVue,
];
```

## 常用脚本

在 `package.json` 增加：

```json
{
  "scripts": {
    "lint:js": "eslint \"{src,tests}/**/*.{js,jsx,ts,tsx}\" --fix",
    "lint:style": "stylelint \"**/*.{css,less,js,jsx,ts,tsx}\" --fix",
    "prettier": "prettier -c --write \"**/**\"",
    "release:dry": "semantic-release --dry-run --no-ci"
  }
}
```

运行：

```bash
pnpm lint:js
pnpm lint:style
pnpm prettier
pnpm release:dry
```

## Husky 与 lint-staged（推荐）

在消费项目中：

```bash
pnpm add -D husky lint-staged
pnpm husky install
```

添加钩子（示例）：

```sh
# .husky/commit-msg
pnpm dlx commitlint --edit "$1"

# .husky/pre-commit
pnpm dlx lint-staged
```

lint-staged 示例：

```json
{
  "lint-staged": {
    "*.md": ["remark --quiet --output --", "prettier --write --no-error-on-unmatched-pattern"],
    "*.json": ["prettier --write --no-error-on-unmatched-pattern"],
    "*.{css,less}": ["stylelint --fix", "prettier --write"],
    "*.{js,jsx}": ["prettier --write", "stylelint --fix", "eslint --fix"],
    "*.{ts,tsx}": ["prettier --parser=typescript --write", "stylelint --fix", "eslint --fix"]
  }
}
```

## 规则说明（简要）

- ESLint：提供基础、React、Vue、TypeScript、Unicorn、Import、Unused 等规则集，已适配 v9。
- Stylelint：整合 `stylelint-config-recommended` 与 `stylelint-config-clean-order`，Less 与 CSS-in-JS 通过 `customSyntax` 解析。
- Commitlint：基于 Gitmoji 规范，可按需开启标题长度等规则。
- Semantic Release：基于 `semantic-release-config-gitmoji`，包含发布级别映射与 monorepo 支持。

更多细节请参考源码的中文注释（`src/eslint/*`、`src/stylelint/index.ts`、`src/commitlint/index.ts`、`src/semantic-release/*`）。

## 测试指南

```bash
# 安装依赖
pnpm install

# 运行 ESLint（修复）
pnpm eslint "{src,tests}/**/*.{js,jsx,ts,tsx}" --fix

# 运行 Stylelint（修复，含 Less/CSS-in-JS）
pnpm stylelint "**/*.{css,less,js,jsx,ts,tsx}" --fix

# 运行 Prettier（检查并修复）
pnpm prettier -c --write "**/**"

# Commitlint 单条测试
echo "✨ feat: add new rule" | pnpm dlx commitlint

# Commitlint 范围测试
pnpm dlx commitlint --from HEAD~1 --to HEAD

# 发布
pnpm semantic-release --dry-run --no-ci
```

## Monorepo 发布

- 使用 `semanticReleaseMonoRepo` 预设：在 `.releaserc.js` 中引用。
- 如需自定义分支策略，可在生成配置后追加 `branches` 字段，如：

```js
module.exports = {
  ...require('@tinyforged/lint-kit').semanticReleaseMonoRepo,
  branches: ['main', { name: 'next', prerelease: true }],
};
```

## 故障排查

- ESLint v9 相关：个别社区插件可能提示 peer 警告（声明范围未更新），通常不影响运行；如需消除警告，可替换或等待插件升级。
- Stylelint 解析错误：请确认安装了 `postcss-less` 与 `postcss-styled-syntax`。
- CI 中锁文件：建议启用 `--frozen-lockfile` 保证可重复安装（先更新锁文件）。

## ESLint v8 → v9 迁移速览

- 配置文件：旧 `.eslintrc.* + .eslintignore` → 新仅 `eslint.config.js`；忽略改为数组项 `{ ignores: [...] }`。
- 插件加载：旧通过字符串名自动加载 → 新必须显式导入插件对象放入 `plugins`。
- 解析器与共享配置：旧 `parser/parserOptions/extends` → 新将解析器对象直接放在配置项；`extends` 改为“导入+展开”合并规则。
- 内置格式化规则移除：所有可 `--fix` 的风格规则标为 deprecated（v10 将删除）；建议交给 Prettier/Biome。
- Node 要求：≥ `18.18.0`。
- API 清理：移除 `CLIEngine` 等老 API；自定义脚本使用 `ESLint` class。

## 版本策略

- 本包要求消费项目使用 ESLint v9（peer 依赖）。
- Node 与 pnpm 版本建议：Node `>= 18.18.0`，pnpm `>= 10`。

## 许可证

MIT © TinyForged
