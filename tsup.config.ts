import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  splitting: true,
  format: ['cjs'],
  sourcemap: true,
  target: 'es2019',
  outDir: 'dist',
  minify: true,
});
