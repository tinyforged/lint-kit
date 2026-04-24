import flatGitignore from 'eslint-config-flat-gitignore';

import type { TypedFlatConfigItem } from '../types';

export function gitignore(): TypedFlatConfigItem[] {
  return [flatGitignore() as unknown as TypedFlatConfigItem];
}
