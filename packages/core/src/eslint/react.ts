// React 预设
// - 通过 createPreset 合并基础预设（base）
// - 仅额外注入 React/React Hooks 专属规则，避免与 base 重复
import { reactRules } from './rules';
import { createPreset } from './utils/createPreset';

export default createPreset({
  plugins: ['react', 'react-hooks'],
  rules: {
    ...reactRules,
  },
});
