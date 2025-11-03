# @coolui/cool

A beautiful, accessible React component library for Next.js applications with full support for React Server Components.

## Installation

```bash
npm install @coolui/cool
# or
pnpm add @coolui/cool
# or
yarn add @coolui/cool
```

## Usage

### Import Styles

Add the styles to your application (e.g., in your root layout):

```tsx
// app/layout.tsx or _app.tsx
import '@coolui/cool/styles.css';
```

### Server Components (Default)

Use server components by importing from the main entry point:

```tsx
// app/page.tsx
import { ServerComponent } from '@coolui/cool';

export default function Page() {
  return (
    <ServerComponent title="Hello World">
      <p>This is a server component!</p>
    </ServerComponent>
  );
}
```

### Client Components

Use client components by importing from the `/client` entry point:

```tsx
// app/components/Counter.tsx
'use client';

import { ClientComponent } from '@coolui/cool/client';

export default function Counter() {
  return <ClientComponent initialCount={0} label="Clicks" />;
}
```

## Components

### ServerComponent

A server-side component that can be used in React Server Components.

**Props:**
- `title` (string, required): The title to display
- `children` (ReactNode, optional): Child elements

### ClientComponent

A client-side component with interactive state.

**Props:**
- `initialCount` (number, optional): Starting count value (default: 0)
- `label` (string, optional): Label for the counter (default: "Count")

## Development

```bash
# Install dependencies
pnpm install

# Build the package
pnpm build

# Watch mode for development
pnpm dev

# Type checking
pnpm typecheck

# Clean build artifacts
pnpm clean
```

## Architecture

This package uses a dual-entry approach:

- **Server Components** (`/server` or main entry): For React Server Components
- **Client Components** (`/client`): For interactive client-side components

This ensures optimal bundle sizes and proper "use client" directive handling.

## License

MIT