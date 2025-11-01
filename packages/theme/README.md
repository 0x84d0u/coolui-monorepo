# @coolui/theme

> A flexible, type-safe theme system for Next.js and React with Tailwind CSS 4.1

[![npm version](https://img.shields.io/npm/v/@coolui/theme.svg)](https://www.npmjs.com/package/@coolui/theme)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Multiple Themes** - Built-in themes + easy custom theme creation
- 🌓 **Dark Mode** - Per-theme light/dark mode support
- ⚡ **No FOUC** - Zero flash of unstyled content
- 🔒 **Type Safe** - Full TypeScript support
- 🚀 **Framework Agnostic** - Works with Next.js (App Router & Pages Router) and Vite
- 📦 **Tree Shakeable** - Only bundle what you use
- 🎯 **Server/Client Split** - Proper Next.js App Router support
- 💾 **Persistent** - Saves preferences to localStorage
- 🎭 **Dynamic** - Register themes at runtime

## 📦 Installation

```bash
npm install @coolui/theme
# or
pnpm add @coolui/theme
# or
yarn add @coolui/theme
```

## 🚀 Quick Start

### Next.js App Router

```tsx
// app/layout.tsx
import { getThemeScript } from '@coolui/theme/server';
import { ThemeProvider } from '@coolui/theme/client';
import '@coolui/theme/styles.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

```tsx
// app/page.tsx
import { ThemeSelector, ThemePreview } from '@coolui/theme/client';

export default function Page() {
  return (
    <main>
      <h1>My App</h1>
      <ThemeSelector />
      <ThemePreview />
    </main>
  );
}
```

### Vite / React

```tsx
// main.tsx
import { ThemeProvider, applyThemeBeforeRender } from '@coolui/theme/client';
import '@coolui/theme/styles.css';

// Prevent FOUC
applyThemeBeforeRender();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

## 📚 API Reference

### Package Exports

The package provides three entry points for optimal tree-shaking:

```typescript
import { ... } from '@coolui/theme';        // Main (all exports)
import { ... } from '@coolui/theme/client'; // Client only
import { ... } from '@coolui/theme/server'; // Server only
```

### Server Exports (`@coolui/theme/server`)

Safe to use in Next.js Server Components:

```typescript
// Get inline script for FOUC prevention
function getThemeScript(
  themeStorageKey?: string,
  modeStorageKey?: string
): string

// Helper for dangerouslySetInnerHTML
function getThemeScriptTag(
  themeStorageKey?: string,
  modeStorageKey?: string
): { __html: string }

// Constants
const THEME_STORAGE_KEY: string
const MODE_STORAGE_KEY: string

// Types
type ThemeConfig = {
  value: string;
  label: string;
  description?: string;
}
type ThemeMode = 'light' | 'dark'

const DEFAULT_THEMES: ThemeConfig[]
```

### Client Exports (`@coolui/theme/client`)

Requires 'use client' directive (automatically handled):

```typescript
// Components
function ThemeProvider(props: ThemeProviderProps): JSX.Element
function ThemeSelector(): JSX.Element
function ThemePreview(): JSX.Element

// Hook
function useTheme(): ThemeContextType

// Utilities
function applyThemeBeforeRender(
  themeStorageKey?: string,
  modeStorageKey?: string
): void

// Same constants and types as server
```

### CSS Imports

```css
/* Full package (core + default + midnight themes) */
@import "@coolui/theme/styles.css";

/* Core only (no themes, bring your own) */
@import "@coolui/theme/core.css";

/* Individual themes */
@import "@coolui/theme/themes/default.css";
@import "@coolui/theme/themes/midnight.css";
```

## 🎨 Creating Custom Themes

### Step 1: Create theme CSS file

```css
/* themes/my-theme.css */

@custom-variant theme-my-theme (&:where([data-theme="my-theme"], [data-theme="my-theme"] *));
@custom-variant my-theme-dark (&:where([data-theme="my-theme"].dark, [data-theme="my-theme"].dark *));

@theme {
  --color-my-theme-bg-light: oklch(0.99 0.01 120);
  --color-my-theme-bg-dark: oklch(0.10 0.02 120);
  --color-my-theme-text-light: oklch(0.18 0.02 120);
  --color-my-theme-text-dark: oklch(0.96 0.01 120);
  /* Add more color variables */
}

@layer base {
  [data-theme="my-theme"] {
    --page-bg: var(--color-my-theme-bg-light);
    --page-text: var(--color-my-theme-text-light);
  }
  
  [data-theme="my-theme"].dark {
    --page-bg: var(--color-my-theme-bg-dark);
    --page-text: var(--color-my-theme-text-dark);
  }
}
```

### Step 2: Import and register

```tsx
// app/layout.tsx
import { ThemeProvider, DEFAULT_THEMES } from '@coolui/theme/client';
import '@coolui/theme/core.css';
import './themes/my-theme.css';

const myThemes = [
  ...DEFAULT_THEMES, // Optional: include built-in themes
  { 
    value: 'my-theme', 
    label: 'My Theme', 
    description: 'Custom branded theme' 
  }
];

export default function Layout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider themes={myThemes} defaultTheme="my-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## 🎯 Usage Examples

### Using the theme hook

```tsx
'use client';

import { useTheme } from '@coolui/theme/client';

export function ThemeToggle() {
  const { themeMode, toggleMode, themeName, themes } = useTheme();
  
  return (
    <div>
      <p>Current: {themeName} - {themeMode}</p>
      <button onClick={toggleMode}>
        {themeMode === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  );
}
```

### Custom theme selector

```tsx
'use client';

import { useTheme } from '@coolui/theme/client';

export function CustomThemeSelector() {
  const { themeName, themes, setThemeName } = useTheme();
  
  return (
    <select 
      value={themeName} 
      onChange={(e) => setThemeName(e.target.value)}
    >
      {themes.map(theme => (
        <option key={theme.value} value={theme.value}>
          {theme.label}
        </option>
      ))}
    </select>
  );
}
```

### Using CSS variables in components

```tsx
export function MyCard() {
  return (
    <div className="bg-[var(--page-bg)] text-[var(--page-text)] p-4 rounded">
      This automatically adapts to the active theme!
    </div>
  );
}
```

### Theme-specific styles

```tsx
export function ThemedButton() {
  return (
    <button className="
      bg-blue-500 dark:bg-blue-600
      theme-midnight:bg-purple-500
      midnight-dark:bg-purple-600
      text-white p-2 rounded
    ">
      Click me
    </button>
  );
}
```

## 🔧 Configuration

### ThemeProvider Props

```typescript
interface ThemeProviderProps {
  children: React.ReactNode;
  themes?: ThemeConfig[];           // Default: DEFAULT_THEMES
  defaultTheme?: string;            // Default: 'default'
  defaultMode?: 'light' | 'dark';   // Default: 'light'
  themeStorageKey?: string;         // Default: 'app-theme-name'
  modeStorageKey?: string;          // Default: 'app-theme-mode'
}
```

### useTheme Return Type

```typescript
interface ThemeContextType {
  themeName: string;                // Current theme name
  themeMode: 'light' | 'dark';      // Current mode
  themes: ThemeConfig[];            // Available themes
  setThemeName: (theme: string) => void;
  setThemeMode: (mode: ThemeMode) => void;
  toggleMode: () => void;           // Toggle between light/dark
  mounted: boolean;                 // Hydration safety flag
}
```

## 🏗️ Project Structure

```
your-app/
├── app/
│   ├── layout.tsx              # ThemeProvider setup
│   └── page.tsx                # Use theme components
├── styles/
│   └── themes/
│       ├── my-theme.css        # Your custom theme
│       └── ocean.css           # Another custom theme
└── components/
    └── theme-toggle.tsx        # Custom theme components
```

## 📖 Built-in Themes

### Default Theme
Classic light/dark theme with neutral colors.

### Midnight Theme
Deep blue theme with purple accents.

## 🎨 CSS Variables Reference

Each theme should define these CSS variables:

```css
--page-bg              /* Main background */
--page-text            /* Primary text */
--page-text-muted      /* Secondary text */
--page-border          /* Border colors */
```

## 🤝 Framework Support

| Framework | Status | Notes |
|-----------|--------|-------|
| Next.js App Router | ✅ Full | Use `/server` and `/client` exports |
| Next.js Pages Router | ✅ Full | Use `/client` exports |
| Vite | ✅ Full | Use `/client` exports |
| Remix | ✅ Full | Use `/client` exports |
| Gatsby | ✅ Full | Use `/client` exports |

## 🐛 Troubleshooting

### Flash of unstyled content (FOUC)

**Solution:** Make sure `getThemeScript()` is in your `<head>` before any other scripts.

### Hydration mismatch warning

**Solution:** Add `suppressHydrationWarning` to your `<html>` tag and check `mounted` before rendering theme-dependent content.

### Theme not applying

**Solution:** 
1. Verify theme CSS is imported
2. Check theme name is registered in `themes` prop
3. Inspect `<html>` element for correct `data-theme` attribute

## 📄 License

MIT © Naoufal Badou

## 🙏 Credits

Built with [Tailwind CSS](https://tailwindcss.com) and [React](https://react.dev).

---

**[Documentation](https://docs.example.com)** • **[Examples](https://github.com/example/examples)** • **[Report Bug](https://github.com/example/issues)**