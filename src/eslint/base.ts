// 基础 ESLint 预设（框架无关）
// - 统一启用通用 JS 规则（commonRules）与 TS 规则（typescriptRules）
// - 集成导入规范、排序、未使用变量清理与 Unicorn 推荐规则的取舍
// - 作为 React/Vue 等框架预设的基线，通过 createPreset 进行合并
import {
  commonRules,
  importRules,
  overrideRules,
  sortingRules,
  typescriptRules,
  unicornRules,
  unusedImportRules,
} from './rules';

export default {
  $schema: 'https://json.schemastore.org/eslintrc',
  extends: ['eslint:recommended', 'plugin:unicorn/recommended'],
  plugins: [
    'unicorn',
    'import',
    'unused-imports',
    'simple-import-sort',
    'sort-keys-fix',
    'typescript-sort-keys',
    '@typescript-eslint',
  ],
  rules: {
    // 通用与类型相关规则
    ...commonRules,
    ...typescriptRules,
    // 团队偏好与与插件重叠的覆盖项
    ...overrideRules,
    // 导入相关与排序相关规则
    ...importRules,
    ...sortingRules,
    // Unicorn 推荐规则的取舍
    ...unicornRules,
    // 未使用导入与变量的处理
    ...unusedImportRules,
  },
};
