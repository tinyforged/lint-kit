// React 相关规则
// 包含 react 与 react-hooks 插件的推荐约束
export const reactRules = {
  // Hooks 规则：只能在函数组件顶层调用
  'react-hooks/rules-of-hooks': 2,

  // 按钮强制声明 type，避免默认 submit 导致误提交
  'react/button-has-type': 2,

  // JSX 列表项必须带 key
  'react/jsx-key': 2,

  // 禁止在 JSX 中写注释文本节点
  'react/jsx-no-comment-textnodes': 2,

  // 禁止重复 props
  'react/jsx-no-duplicate-props': 2,

  // 处理 target="_blank" 的安全问题
  'react/jsx-no-target-blank': 2,

  // 禁止使用未定义的组件或变量
  'react/jsx-no-undef': 2,

  // 标记 React 变量被 JSX 使用，避免误报未使用 React
  'react/jsx-uses-react': 2,

  // 标记 JSX 中引用的变量为已使用，避免误报未使用变量
  'react/jsx-uses-vars': 2,

  // 一些危险的 props 使用限制
  // 禁止将 children 作为普通属性传递
  'react/no-children-prop': 2,

  // 禁止同时使用 dangerouslySetInnerHTML 和 children
  'react/no-danger-with-children': 2,

  // 避免使用过时 API
  // 禁止使用已废弃的 API
  'react/no-deprecated': 2,

  // 不允许直接修改 state（需通过 setState/函数式更新）
  'react/no-direct-mutation-state': 2,

  // 禁止使用已不推荐的 findDOMNode
  'react/no-find-dom-node': 2,

  // 禁止使用过时的 isMounted
  'react/no-is-mounted': 2,

  // 禁止在 render 中返回值但不使用该返回值
  'react/no-render-return-value': 2,

  // 禁止使用字符串 ref，鼓励使用函数或 createRef
  'react/no-string-refs': 2,

  // 防止文本中未转义的字符
  'react/no-unescaped-entities': 2,

  // 属性名保持一致性
  'react/no-unknown-property': 2,

  // 函数组件必须返回 JSX
  'react/require-render-return': 2,
};
