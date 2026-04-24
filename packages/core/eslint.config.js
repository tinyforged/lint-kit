const { eslintBase } = require('./dist');

module.exports = [
  ...eslintBase,
  // 同步 .eslintignore 到 Flat Config ignores
  {
    ignores: [
      'node_modules',
      '.coverage',
      'jest*',
      '_test_',
      '__test__',
      'dist',
      'es',
      'lib',
      'logs',
    ],
  },
];
