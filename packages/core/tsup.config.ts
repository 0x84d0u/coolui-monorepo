import { defineConfig } from 'tsup';

export default defineConfig([
  // Client-side exports (for React components)
  {
    entry: ['src/index.client.ts'],
    format: ['cjs', 'esm'],
    dts: false,
    sourcemap: true,
    clean: true,
    external: [
      'react',
      'react-dom',
      'class-variance-authority',
      'clsx',
      'tailwind-merge'
    ],
    outDir: 'dist',
    banner: {
      js: "'use client';",
    },
    outExtension({ format }) {
      return {
        js: format === 'cjs' ? '.js' : '.mjs',
      };
    },
  },
  // Server-side exports (utilities only, no React)
  {
    entry: ['src/index.server.ts'],
    format: ['cjs', 'esm'],
    dts: false,
    sourcemap: true,
    external: [
      'react',
      'react-dom',
      'class-variance-authority',
      'clsx',
      'tailwind-merge'
    ],
    outDir: 'dist',
    outExtension({ format }) {
      return {
        js: format === 'cjs' ? '.js' : '.mjs',
      };
    },
  },
]);