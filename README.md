pnpm install
pnpm build


pnpm dev: Runs vite and tsc --watch for your packages all at once. When you save a file in @coolui/core, it will automatically rebuild, and vite-demo will pick up the change.

pnpm build: Builds all apps and packages in the correct order, using the cache.

pnpm lint: Lints all projects.

pnpm typecheck: Checks types across your entire monorepo without creating build files.

pnpm clean:dist: Deletes all dist and .turbo folders (a "soft" clean).

pnpm clean: A "hard" clean that deletes everything—all build artifacts and all node_modules folders. This is perfect when you need a completely fresh start.