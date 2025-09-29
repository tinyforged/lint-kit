/* eslint-disable no-useless-escape */
// semantic-release 配置（兼容 gitmoji 前缀 + Conventional Commits 类型）
// - 通过 parserOpts 允许可选的 emoji 前缀（支持 :emoji: 与 Unicode emoji）
// - 使用常规类型（feat/fix 等）决定发版级别，并在 release-notes 中用 emoji 命名分区
export default {
  $schema: 'https://json.schemastore.org/semantic-release',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          // 允许可选的 gitmoji 前缀（:emoji: 或 Unicode emoji），并兼容 ! 语法
          breakingHeaderPattern:
            /^(?:(?::[\w-]+:)|[\p{Extended_Pictographic}\uFE0F\u200D]+)\s?(\w*)(?:\(([\w\$\.\-\* ]*)\))?!:\s(.*)$/u,
          headerPattern:
            /^(?:(?::[\w-]+:)|[\p{Extended_Pictographic}\uFE0F\u200D]+)\s?(\w*)(?:\(([\w\$\.\-\* ]*)\))?!?:\s(.*)$/u,
          noteKeywords: ['BREAKING-CHANGE', 'BREAKING CHANGE'],
        },
        preset: 'conventionalcommits',
        releaseRules: [
          { release: 'minor', type: 'feat' },
          { release: 'patch', type: 'fix' },
          { release: 'patch', type: 'perf' },
          { release: 'patch', type: 'style' },
          { release: 'patch', type: 'refactor' },
          { release: 'patch', type: 'build' },
          { release: 'patch', scope: 'README', type: 'docs' },
          { release: 'patch', scope: 'README.md', type: 'docs' },
          { release: false, type: 'docs' },
          { release: false, type: 'test' },
          { release: false, type: 'ci' },
          { release: false, type: 'chore' },
          { release: false, type: 'wip' },
          { release: 'patch', subject: '*force release*' },
          { release: 'patch', subject: '*force patch*' },
          { release: 'minor', subject: '*force minor*' },
          { release: 'major', subject: '*force major*' },
          { release: false, subject: '*skip release*' },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { section: '✨ Features', type: 'feat' },
            { section: '🐛 Bug Fixes', type: 'fix' },
            { section: '⚡ Performance', type: 'perf' },
            { section: '🎨 Styles', type: 'style' },
            { section: '♻️ Code Refactoring', type: 'refactor' },
            { section: '📦 Build', type: 'build' },
            { section: '📝 Documentation', type: 'docs' },
            { section: '✅ Tests', type: 'test' },
            { section: '👷 CI', type: 'ci' },
            { section: '🔧 Chores', type: 'chore' },
          ],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogTitle: `<a name="readme-top"></a>\n\n# Changelog`,
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: '🔖 chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};
