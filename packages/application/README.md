# @coolui/application

A beautiful, accessible React component library for Next.js applications with full support for React Server Components.

## Features

- 🎨 **Beautiful Components** - Pre-built page layouts, sections, and templates
- ⚡ **React Server Components** - Optimized for Next.js App Router
- 🎯 **TypeScript** - Full type safety and autocomplete
- 🌗 **Theme System** - Built-in light/dark mode with custom themes
- 📱 **Responsive** - Mobile-first design with responsive layouts
- ♿ **Accessible** - WCAG 2.1 compliant components

## Installation

```bash
npm install @coolui/application
# or
pnpm add @coolui/application
# or
yarn add @coolui/application
```

## Quick Start

### 1. Import Styles

Add the styles to your root layout:

```tsx
// app/layout.tsx
import '@coolui/application/styles.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### 2. Add Theme Provider (Optional)

For theme switching support:

```tsx
// app/layout.tsx
import '@coolui/application/styles.css'
import { ThemeProvider } from '@coolui/application/client'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 3. Build Your First Page

```tsx
// app/page.tsx
import { Page, Section } from '@coolui/application'

export default function Home() {
  return (
    <Page 
      title="Welcome" 
      description="Build beautiful applications"
    >
      <Section spacing="comfortable">
        <h2>Getting Started</h2>
        <p>Your content here...</p>
      </Section>
    </Page>
  )
}
```

## Components

### Template

Application-level wrapper with header, sidebar, and overlay support.

```tsx
import { Template } from '@coolui/application/client'

export default function RootLayout({ children }) {
  return (
    <Template
      config={{
        headerEnabled: true,
        headerFixed: true,
        sidebarEnabled: true,
        logoEnabled: true,
        logoWordmark: "MyApp"
      }}
      sidebarBody={<Navigation />}
    >
      {children}
    </Template>
  )
}
```

**Config Options:**
- `headerEnabled` - Show/hide header
- `headerFixed` - Make header sticky
- `headerThemeToggleEnabled` - Show theme toggle button
- `sidebarEnabled` - Enable mobile sidebar
- `logoEnabled` - Show logo in header
- `logoWordmark` - Logo text
- `logoImgUrl` - Logo image URL

### Page

Page-level layout with optional sidebar and navigation.

```tsx
'use client'
import { Page } from '@coolui/application/client'

export default function MyPage() {
  const navItems = [
    { id: 'section-1', title: 'Getting Started' },
    { id: 'section-2', title: 'Installation' },
  ]

  return (
    <Page
      title="Documentation"
      description="Learn how to use our components"
      nav={navItems}
      sidebarPosition="right"
    >
      <section id="section-1">
        <h2>Getting Started</h2>
        <p>Content...</p>
      </section>
      <section id="section-2">
        <h2>Installation</h2>
        <p>Content...</p>
      </section>
    </Page>
  )
}
```

**Props:**
- `title` - Page heading
- `description` - Page description
- `nav` - Table of contents items
- `sidebar` - Custom sidebar content
- `sidebarPosition` - 'left' | 'right' (default: 'left')

### Section

Flexible section component with multiple layouts and themes.

```tsx
import { Section } from '@coolui/application'

export default function Features() {
  return (
    <>
      <Section
        title="Features"
        description="Everything you need"
        spacing="comfortable"
        colorTheme="primary"
        layout="grid"
      >
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </Section>

      <Section
        spacing="large"
        colorTheme="secondary"
        layout="split"
        borders="top"
      >
        <div>Content left</div>
        <div>Content right</div>
      </Section>
    </>
  )
}
```

**Props:**
- `spacing` - 'compact' | 'comfortable' | 'large' | 'huge'
- `colorTheme` - 'primary' | 'secondary' | 'teritary'
- `layout` - 'stacked' | 'grid' | 'split' | 'center'
- `borders` - 'top' | 'bottom' | 'both'
- `headingSize` - 'display' | 'page' | 'section'
- `alignFooter` - 'start' | 'center' | 'end' | 'between'

## Theme System

### Using Themes

```tsx
'use client'
import { useTheme } from '@coolui/application/client'

export function ThemeToggle() {
  const { themeMode, themeName, toggleMode, setThemeName, themes } = useTheme()
  
  return (
    <div>
      <button onClick={toggleMode}>
        Toggle {themeMode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      
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
    </div>
  )
}
```

### Custom Themes

```tsx
import { ThemeProvider } from '@coolui/application/client'

const config = {
  defaultTheme: 'modern',
  defaultMode: 'dark',
  themes: [
    { label: "Default", value: "default" },
    { label: "Modern", value: "modern" },
    { label: "Custom", value: "custom" },
  ]
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider config={config}>
      {children}
    </ThemeProvider>
  )
}
```

## Server vs Client Components

### Server Components (Default)

Import from main entry point or `/server`:

```tsx
import { Page, Section } from '@coolui/application'
// or
import { Page, Section } from '@coolui/application/server'
```

These are React Server Components and can be used in server-side code.

### Client Components

Import from `/client` for interactive features:

```tsx
'use client'
import { Page, Template, useTheme, useTemplate } from '@coolui/application/client'
```

Use client components when you need:
- Interactive state (navigation, theme switching)
- Browser APIs
- Event handlers
- Hooks

## Advanced Usage

### Custom Navigation

```tsx
'use client'
import { Page, PageNav } from '@coolui/application/client'

export default function Docs() {
  const sections = [
    { id: 'intro', title: 'Introduction' },
    { id: 'api', title: 'API Reference' },
  ]

  return (
    <Page
      title="Documentation"
      sidebar={
        <>
          <PageNav items={sections} />
          <AdditionalLinks />
        </>
      }
    >
      {/* Your content */}
    </Page>
  )
}
```

### Template Context

```tsx
'use client'
import { useTemplate } from '@coolui/application/client'

export function MyComponent() {
  const { 
    isHeaderScrolled, 
    isSidebarOpen, 
    toggleSidebar 
  } = useTemplate()
  
  return (
    <button onClick={toggleSidebar}>
      {isSidebarOpen ? 'Close' : 'Open'} Sidebar
    </button>
  )
}
```

## TypeScript

Full TypeScript support with exported types:

```tsx
import type { 
  PageProps, 
  SectionProps, 
  TemplateProps,
  TemplateConfig,
  ThemeConfig,
} from '@coolui/application'
```

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

This package uses a dual-entry approach for optimal bundle sizes:

- **Server Components** (`/server` or main entry): For React Server Components
- **Client Components** (`/client`): For interactive client-side components

This ensures proper "use client" directive handling and prevents unnecessary client-side JavaScript.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please read our contributing guidelines.

## License

MIT © [Your Name]

## Related Packages

- `@coolui/styles` - Design tokens and CSS foundation
- `@coolui/core` - Core UI primitives
- `@coolui/typography` - Typography components