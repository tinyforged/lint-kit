// Commitlint 配置（基于 gitmoji）
// - 结合 gitmoji 规范校验 commit 标题与类型
// - 规则可按需扩展：如限制 header 长度、要求空行、限定类型枚举等
export default {
  $schema: 'https://json.schemastore.org/commitlintrc',
  extends: ['gitmoji'],
  rules: {
    // 可根据团队习惯开启/调整以下规则
    // - footer-leading-blank: 是否要求正文与 footer 之间空行
    // - header-max-length: 标题最大长度（推荐 100~120）
    'footer-leading-blank': [0, 'never'],
    'header-max-length': [0, 'never'],
  },
};
