module.exports = {
  branches: ['main'],
  // 复用内置的 gitmoji 风格 semantic-release 配置
  ...require('./dist').semanticRelease,
};
