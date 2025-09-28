// import 插件相关规则
// 保证导入顺序、换行与去重
export const importRules = {
  // import 必须位于文件顶部，避免在其他语句后再导入
  'import/first': 'error',
  // import 语句后保留一个空行，提升分隔与可读性
  'import/newline-after-import': 'error',
  // 禁止重复从同一模块导入，减少冗余
  'import/no-duplicates': 'error',
};
