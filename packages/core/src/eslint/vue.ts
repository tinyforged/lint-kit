// Vue3 预设
// - 通过 createPreset 合并基础预设（base）
// - 设置 vue-eslint-parser 以支持 SFC，并委托 TS 解析器处理 <script setup lang="ts">
// - 额外注入 Vue3 推荐与团队实践的规则
import { commonRules, typescriptRules, vueRules } from './rules';
import { createPreset } from './utils/createPreset';

export default createPreset({
  extends: ['plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: { jsx: false },

    ecmaVersion: 2020,
    // 委托给 @typescript-eslint/parser 解析脚本
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    ...commonRules,
    ...typescriptRules,
    ...vueRules,
  },
});
