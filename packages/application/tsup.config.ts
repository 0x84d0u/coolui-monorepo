import { defineConfig } from 'tsup';

export default defineConfig([
  // Client-side components (React Client Components)
  {
    entry: { client: 'source/client.ts' },
    format: ['esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: false,
    treeshake: true,
    minify: false,
    bundle: true,
    external: ['react', 'react-dom'],
    outDir: 'dist',
    banner: {
      js: '"use client";'
    },
    esbuildOptions(options) {
      options.banner = {
        js: '"use client";',
      };
      options.legalComments = 'inline';
    },
    async onSuccess() {
      const { copyFile, mkdir, readFile, writeFile } = await import('fs/promises');
      const { existsSync } = await import('fs');

      try {
        await mkdir('dist', { recursive: true });

        // ✅ FIXED: Copy the actual styles.css file
        if (existsSync('source/styles.css')) {
          await copyFile('source/styles.css', 'dist/styles.css');
          console.log('✓ Copied styles.css');
        }

        // Ensure "use client" is at the very top of client.js
        const clientPath = 'dist/client.js';
        if (existsSync(clientPath)) {
          let content = await readFile(clientPath, 'utf-8');

          // Remove any existing "use client" directives
          content = content.replace(/^["']use client["'];?\s*/gm, '');

          // Add it at the very beginning
          content = '"use client";\n' + content;

          await writeFile(clientPath, content);
          console.log('✓ Added "use client" to client.js');
        }
      } catch (err) {
        console.error('Error in onSuccess:', err);
      }
    },
  },

  // Server-side components (React Server Components)
  {
    entry: { server: 'source/server.ts' },
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