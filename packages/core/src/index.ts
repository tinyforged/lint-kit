

export { default as commitlint } from './commitlint';
export {
  comments,
  gitignore,
  ignores,
  javascript,
  jsonc,
  node,
  react,
  stylistic,
  svelte,
  typescript,
  vue,
} from './configs';
export {defineConfig as default,defineConfig} from './factory';
export {
  GLOB_JS,
  GLOB_JSON,
  GLOB_JSONC,
  GLOB_MD,
  GLOB_NODE_SCRIPTS,
  GLOB_SRC,
  GLOB_SVELTE,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from './globs';
export { default as prettier } from './prettier';
export { default as semanticRelease } from './semantic-release';
export { default as stylelint } from './stylelint';
export type {
  ConfigName,
  OptionsConfig,
  ReactOptions,
  StylisticOptions,
  TypedFlatConfigItem,
  TypeScriptOptions,
  VueOptions,
} from './types';
export { getOverrides, isInEditorEnv, resolveSubOptions } from './utils';