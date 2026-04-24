// Smoke test config for React using the built kit
const kit = require('../dist/index.js');

module.exports = [
  ...kit.eslintReact,
  // Avoid React version warning in eslint-plugin-react during tests
  { settings: { react: { version: '18.0.0' } } },
];
