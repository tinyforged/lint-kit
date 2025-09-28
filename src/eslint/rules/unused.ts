// 处理未使用的导入与变量
// 通过 eslint-plugin-unused-imports 避免与内置 no-unused-vars 冲突
export const unusedImportRules = {
  // 删除未使用的 import 声明，保持依赖最小化
  'unused-imports/no-unused-imports': 'error',
  // 对未使用变量给出警告（允许下划线前缀忽略），更贴近真实使用
  'unused-imports/no-unused-vars': [
    'warn',
    { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
  ],
};
