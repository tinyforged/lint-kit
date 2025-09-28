// 通用 JavaScript 规则（与框架无关）
// 这些规则用于提升代码健壮性与一致性
export const commonRules = {
  // array 方法应按用途选择：需要返回值用 map/filter，否则用 forEach
  'array-callback-return': 2,
  // 避免隐式类型转换导致的逻辑问题
  'eqeqeq': 2,
  // 防止循环方向错误
  'for-direction': 2,
  // for...in 需结合 hasOwnProperty 以避免原型链污染
  'guard-for-in': 2,
  // 异步 executor 会使 Promise 行为复杂化
  'no-async-promise-executor': 2,
  // 避免 switch/case 变量作用域问题
  'no-case-declarations': 2,
  // 禁止调试语句遗留
  'no-debugger': 2,
  // 禁止 delete 变量
  'no-delete-var': 2,
  // 防止重复的 else if 条件
  'no-dupe-else-if': 2,
  // 防止重复的 case
  'no-duplicate-case': 2,
  // eval 可能引发安全问题
  'no-eval': 2,
  // catch 参数不可重新赋值
  'no-ex-assign': 2,
  // 禁止修改全局对象
  'no-global-assign': 2,
  // 正则表达式应合法
  'no-invalid-regexp': 2,
  // v9：已由 no-global-assign 覆盖，移除已弃用的 no-native-reassign
  // 修改函数入参可能引起副作用（仍允许特定场景通过关闭或降级）
  'no-param-reassign': 2,
  // Promise executor 不应返回值
  'no-promise-executor-return': 2,
  // 禁止自我赋值
  'no-self-assign': 2,
  // 禁止自我比较
  'no-self-compare': 2,
  // 禁止使用受限名称作为变量名
  'no-shadow-restricted-names': 2,
  // 稀疏数组易引起歧义
  'no-sparse-arrays': 2,
  // finally 不应包含可能抛出的语句
  'no-unsafe-finally': 2,
  // 禁止无用的 label
  'no-unused-labels': 2,
  // 禁止无意义的 catch
  'no-useless-catch': 2,
  // 禁止无意义的转义
  'no-useless-escape': 2,
  // 使用 let/const 代替 var
  'no-var': 2,
  // 禁止 with（影响作用域链）
  'no-with': 2,
  // 生成器必须 yield
  'require-yield': 2,
  // 使用 Number.isNaN 替代全局 isNaN
  'use-isnan': 2,
};
