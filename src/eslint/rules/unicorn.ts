// Unicorn 插件规则覆盖
// 统一项目中对 Unicorn 推荐规则的取舍
export const unicornRules = {
  // 统一异常变量名（如 error），提升可读性
  'unicorn/catch-error-name': 'warn',
  // 不强制显式 length 比较（按团队偏好关闭）
  'unicorn/explicit-length-check': 0,
  // 不强制文件命名风格（避免与现有约定冲突）
  'unicorn/filename-case': 0,
  // 不强制特定 import 风格（default/named 等按需选择）
  'unicorn/import-style': 0,
  // 允许匿名默认导出（在工具/配置文件中较常见）
  'unicorn/no-anonymous-default-export': 0,
  // 允许数组回调引用（配合已存在工具函数使用）
  'unicorn/no-array-callback-reference': 0,
  // 允许使用 forEach（可读性与习惯考虑）
  'unicorn/no-array-for-each': 0,
  // 允许使用 reduce（在累积/转换场景是合理选择）
  'unicorn/no-array-reduce': 0,
  // 空文件给出警告，提示删除或补充内容
  'unicorn/no-empty-file': 'warn',
  // 允许否定条件（有时更清晰），不强制改写
  'unicorn/no-negated-condition': 0,
  // 允许嵌套三元（谨慎使用），不强制改写
  'unicorn/no-nested-ternary': 0,
  // 允许使用 null（与外部接口/API 交互常见）
  'unicorn/no-null': 0,
  // typeof undefined 给出提示（更推荐直接比较变量是否为 undefined）
  'unicorn/no-typeof-undefined': 'warn',
  // 允许显式返回 undefined（在某些 API 设计中有意义）
  'unicorn/no-useless-undefined': 0,
  // 不强制使用 codePoint（按需在 Unicode 处理场景再启用）
  'unicorn/prefer-code-point': 0,
  // 不强制使用逻辑运算符替代三元（按可读性取舍）
  'unicorn/prefer-logical-operator-over-ternary': 0,
  // 不强制使用 ES 模块（兼容多种打包/运行环境）
  'unicorn/prefer-module': 0,
  // 不强制数字静态属性（按场景使用 Number.*）
  'unicorn/prefer-number-properties': 0,
  // 不强制使用 querySelector（按场景使用 API）
  'unicorn/prefer-query-selector': 0,
  // 不强制使用扩展运算符（按性能与可读性取舍）
  'unicorn/prefer-spread': 0,
  // 不强制使用 String.raw（按模板字面量场景决定）
  'unicorn/prefer-string-raw': 0,
  // 推荐使用 String.prototype.replaceAll 提示现代写法
  'unicorn/prefer-string-replace-all': 'warn',
  // 不强制使用三元优先（按团队编码风格）
  'unicorn/prefer-ternary': 0,
  // 不强制抛出 TypeError（按业务异常模型决定）
  'unicorn/prefer-type-error': 0,
  // 允许缩写（例如 ctx、req），不强制全称
  'unicorn/prevent-abbreviations': 0,
  // switch case 大括号风格给出警告，保持统一
  'unicorn/switch-case-braces': 'warn',
};
