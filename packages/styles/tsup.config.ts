import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: {
      index: 'source/index.ts'
    },
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: false,
    treeshake: true,
    minify: false,
    external: ['react', 'react-dom'],
    outDir: 'dist',
  },
]);