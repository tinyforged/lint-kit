// Monorepo 场景下的 semantic-release 配置（开启 monorepo 支持）
import { createConfig } from 'semantic-release-config-gitmoji/lib/createConfig';

import { options } from './index';

export default {
  $schema: 'https://json.schemastore.org/semantic-release',
  ...createConfig({ ...options, monorepo: true }),
};
