// 预设构建工具：在各框架预设中复用基础配置并做去重与合并
// 用法：createPreset({ extends, plugins, rules, parser, parserOptions })
// 策略：
// 1) 合并 base 的配置，并对 extends/plugins 去重
// 2) 规则以“后者覆盖前者”为原则（框架或项目自定义覆盖基础）
// 3) parser / parserOptions 仅在明确提供时覆盖 base
import base from '../base';

export type PresetOptions = {
  extends?: string[];
  parser?: string;
  parserOptions?: Record<string, any>;
  plugins?: string[];
  rules?: Record<string, any>;
};

// 统一构建 ESLint 预设的工具方法
// - 合并 base 的配置
// - 去重 extends 与 plugins
// - 合并规则（后者覆盖前者）
export function createPreset(options: PresetOptions) {
  // 对 extends 与 plugins 做集合去重，避免重复继承/加载
  const mergedExtends = Array.from(new Set([...(base.extends || []), ...(options.extends || [])]));
  const mergedPlugins = Array.from(new Set([...(base.plugins || []), ...(options.plugins || [])]));

  return {
    ...base,
    // 仅在调用方提供时覆盖解析器相关设置
    ...(options.parser ? { parser: options.parser } : {}),
    ...(options.parserOptions ? { parserOptions: options.parserOptions } : {}),
    extends: mergedExtends,
    plugins: mergedPlugins,
    rules: {
      // 后合并的规则覆盖前者，实现可预测的覆盖链：base -> preset
      ...base.rules,
      ...options.rules,
    },
  };
}
