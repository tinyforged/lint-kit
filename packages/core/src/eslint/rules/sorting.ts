// 排序相关规则：导出排序、对象键排序
export const sortingRules = {
  // 导出语句排序，使导出顺序稳定一致
  'simple-import-sort/exports': 'error',
  // 对象键名排序，减少 diff 与阅读成本
  'sort-keys-fix/sort-keys-fix': 'error',
};
