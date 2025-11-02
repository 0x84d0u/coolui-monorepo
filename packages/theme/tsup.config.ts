import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['export/*.ts'],
  format: ['esm', 'cjs'],
  dts: false,  // TypeScript will handle types
  external: ['react', 'react-dom'],
  clean: false, // Removes the css file
  splitting: true
});