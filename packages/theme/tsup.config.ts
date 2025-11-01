import { defineConfig } from 'tsup';

export default defineConfig([
    // Main entry
    {
        entry: ['src/index.ts'],
        format: ['cjs', 'esm'],
        dts: true,
        sourcemap: true,
        clean: false,
        external: ['react', 'react-dom'],
    },
    // Client entry (with 'use client' preserved)
    {
        entry: ['src/client.ts'],
        format: ['cjs', 'esm'],
        dts: true,
        sourcemap: true,
        external: ['react', 'react-dom'],
        banner: {
            js: "'use client';",
        },
    },
    // Server entry (no 'use client')
    {
        entry: ['src/server.ts'],
        format: ['cjs', 'esm'],
        dts: true,
        sourcemap: true,
        external: ['react', 'react-dom'],
    },
]);