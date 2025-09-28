// Vue3 相关规则（基于 eslint-plugin-vue）
// 结合常见团队实践，提供更安全与一致性的约束
export const vueRules = {
  // 属性与 props 命名保持一致的大小写风格
  // HTML 属性使用连字符风格，保持与模板一致性
  'vue/attribute-hyphenation': 'error',

  // 组件名建议多词，避免与原生标签冲突（按需调整）
  'vue/multi-word-component-names': 'warn',

  // 不要直接修改 props（会破坏单向数据流）
  'vue/no-mutating-props': 'warn',

  // setup 中不要对 props 解构，避免失去响应性引用
  'vue/no-setup-props-destructure': 'warn',

  // 避免使用 v-html 带来的 XSS 风险（如需 HTML，请经后端或安全过滤）
  'vue/no-v-html': 'off',

  // props 名称大小写风格保持统一，可读性更佳
  'vue/prop-name-casing': 'error',

  // 对 props 推荐提供默认值（与 TS 类型搭配时可按需关闭）
  'vue/require-default-prop': 'off',

  // 强制明确声明 emits，提升组件可维护性
  'vue/require-explicit-emits': 'error',
  // v-slot 使用简写，提升可读性
  'vue/v-slot-style': [
    'error',
    { atComponent: 'shorthand', default: 'shorthand', named: 'shorthand' },
  ],

  // 校验 defineEmits 的使用合法性
  'vue/valid-define-emits': 'error',

  // 校验 defineProps 的使用合法性
  'vue/valid-define-props': 'error',
};
