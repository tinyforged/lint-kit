import type { Linter } from 'eslint';

export type TypedFlatConfigItem = Omit<Linter.Config, 'plugins' | 'rules'> & {
  plugins?: Record<string, any>;
  rules?: Linter.RulesRecord;
};

export interface OptionsConfig {
  type?: 'app' | 'lib';
  autoDetect?: boolean;
  react?: boolean | ReactOptions;
  vue?: boolean | VueOptions;
  typescript?: boolean | TypeScriptOptions;
  stylistic?: boolean | StylisticOptions;
  svelte?: boolean;
  uncommitted?: boolean;
  ignores?: string[];
  overrides?: Partial<Record<ConfigName, Linter.RulesRecord>>;
}

export interface ReactOptions {
  version?: 'detect' | string;
  overrides?: Linter.RulesRecord;
}

export interface VueOptions {
  overrides?: Linter.RulesRecord;
  stylistic?: boolean;
  typescript?: boolean;
}

export interface TypeScriptOptions {
  componentExts?: string[];
  overrides?: Linter.RulesRecord;
}

export interface StylisticOptions {
  indent?: number | 'tab';
  quotes?: 'single' | 'double';
  semi?: boolean;
}

export type ConfigName =
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'vue'
  | 'svelte'
  | 'jsonc'
  | 'node'
  | 'comments'
  | 'stylistic';
