import { defineConfig as tsdownConfig } from 'tsdown';

export default tsdownConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
});
