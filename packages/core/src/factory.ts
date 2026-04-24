import type { Linter } from 'eslint';
import { FlatConfigComposer } from 'eslint-flat-config-utils';
import { isPackageExists } from 'local-pkg';

import {
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
import type { OptionsConfig, TypedFlatConfigItem } from './types';
import { resolveSubOptions } from './utils';

const FRAMEWORK_VUE = ['vue', 'nuxt', 'vitepress'];

export function defineConfig(
  options: OptionsConfig = {},
  ...userConfigs: Array<TypedFlatConfigItem | TypedFlatConfigItem[] | Linter.Config[]>
): FlatConfigComposer<TypedFlatConfigItem> {
  const {
    autoDetect = true,
    type = 'app',
    react: enableReact = autoDetect ? isPackageExists('react') : false,
    vue: enableVue = autoDetect ? FRAMEWORK_VUE.some((p) => isPackageExists(p)) : false,
    typescript: enableTypeScript = autoDetect ? isPackageExists('typescript') : false,
    svelte: enableSvelte = autoDetect ? isPackageExists('svelte') : false,
    stylistic: enableStylistic = false,
    ignores: userIgnores = [],
  } = options;

  const configs: Array<TypedFlatConfigItem | TypedFlatConfigItem[]> = [
    gitignore(),
    ignores(userIgnores),
    comments(),
    javascript(),
    jsonc(),
    node(),
  ];

  if (enableTypeScript) {
    configs.push(
      typescript({
        ...(resolveSubOptions(options, 'typescript') as Record<string, any>),
        type,
      }),
    );
  }

  if (enableReact) {
    configs.push(
      react({
        ...(resolveSubOptions(options, 'react') as Record<string, any>),
        typescript: !!enableTypeScript,
      }),
    );
  }

  if (enableVue) {
    configs.push(
      vue({
        ...(resolveSubOptions(options, 'vue') as Record<string, any>),
        typescript: !!enableTypeScript,
        stylistic: !!enableStylistic,
      }),
    );
  }

  if (enableSvelte) {
    configs.push(svelte());
  }

  if (enableStylistic) {
    configs.push(stylistic(typeof enableStylistic === 'object' ? enableStylistic : {}));
  }

  let composer = new FlatConfigComposer<TypedFlatConfigItem>();
  composer = composer.append(...configs, ...(userConfigs as any));

  return composer;
}
