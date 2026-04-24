// 通用覆盖：关闭或调整与插件重叠或团队偏好的规则
export const overrideRules = {
  // 允许必要时使用 ts-ignore，避免严格场景下阻塞开发
  '@typescript-eslint/ban-ts-comment': 0,

  // 允许使用 any（按需控制），提升与外部库/动态数据的兼容性
  '@typescript-eslint/no-explicit-any': 0,

  // 空语句块给出警告，提示补充逻辑或注释说明
  'no-empty': 'warn',

  // 关闭多余布尔转换的限制，避免与 TS 类型缩窄场景冲突
  'no-extra-boolean-cast': 0,

  // 关闭内置未使用变量检测，交由 @typescript-eslint 处理更准确
  'no-unused-vars': 0,
};
