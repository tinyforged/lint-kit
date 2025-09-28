// Stylelint 配置
// - 依赖说明：
//   - 自定义语法：postcss-less、postcss-styled-syntax（需安装对应包）
//   - 插件：stylelint-less、stylelint-order、stylelint-use-logical-spec
// - 目标：保证 Less、CSS-in-JS（JS/TS/JSX/TSX）均能正确解析与排序
export default {
  $schema: 'https://json.schemastore.org/stylelintrc',
  extends: ['stylelint-config-recommended', 'stylelint-config-clean-order'],
  overrides: [
    {
      // 解析 Less/CSS：需要安装依赖 postcss-less
      customSyntax: 'postcss-less',
      files: ['*.less', '*.css'],
      plugins: ['stylelint-less'],
      rules: {
        'at-rule-no-unknown': null,
        'color-no-invalid-hex': true,
        'function-no-unknown': null,
        'less/color-no-invalid-hex': true,
      },
    },
    {
      // 解析 CSS-in-JS：需要安装依赖 postcss-styled-syntax
      customSyntax: 'postcss-styled-syntax',
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'no-empty-source': null,
        'no-invalid-double-slash-comments': null,
        'no-missing-end-of-source-newline': null,
        'property-no-vendor-prefix': true,
        'value-no-vendor-prefix': [true, { ignoreValues: ['box'] }],
      },
    },
  ],
  plugins: ['stylelint-order', 'stylelint-use-logical-spec'],
  rules: {
    'liberty/use-logical-spec': [true, { except: ['float', /^((min|max)-)?(height|width)$/i] }],
  },
};
