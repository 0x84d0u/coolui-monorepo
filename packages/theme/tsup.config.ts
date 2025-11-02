import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['export/*.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom'],
  clean: true,
  splitting: true
});