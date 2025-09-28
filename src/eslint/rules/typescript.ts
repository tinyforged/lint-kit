// TypeScript 相关规则
// 使用 @typescript-eslint 插件增强类型相关约束
export const typescriptRules = {
  // 禁止使用某些危险或不明确的类型
  // 避免令人困惑的非空断言
  '@typescript-eslint/no-confusing-non-null-assertion': 2,
  // 禁止重复的类成员定义
  '@typescript-eslint/no-dupe-class-members': 2,
  // 避免空接口
  '@typescript-eslint/no-empty-interface': 2,
  // this 的使用限制
  '@typescript-eslint/no-invalid-this': 2,
  // 禁止循环中声明函数造成闭包问题
  '@typescript-eslint/no-loop-func': 2,
  // 禁止错误使用 new 或构造函数
  '@typescript-eslint/no-misused-new': 2,
  // 禁止使用命名空间（现代 TS 更推荐模块）
  '@typescript-eslint/no-namespace': 2,
  // 禁止在可选链上使用非空断言
  '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
  // 禁止重复声明
  '@typescript-eslint/no-redeclare': 2,
  // 避免 this 赋值别名导致语义不清
  '@typescript-eslint/no-this-alias': 2,
  // 禁止无用的表达式
  '@typescript-eslint/no-unused-expressions': 2,
  // 禁止未使用的变量
  '@typescript-eslint/no-unused-vars': 2,
  // 禁止使用前未定义
  '@typescript-eslint/no-use-before-define': 2,
  // 禁止无意义的构造函数
  '@typescript-eslint/no-useless-constructor': 2,
  // 三斜线引用限制
  '@typescript-eslint/triple-slash-reference': 2,
};
