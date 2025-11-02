import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./export/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@coolui/theme/**/*.{js,ts,jsx,tsx}", // Scan your package
  ],
} satisfies Config;

// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     // This configuration is mainly for providing IntelliSense
//     // The actual content paths are defined by consuming applications
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       /*
//         Define semantic color names that map to your CSS variables.
//         These names will appear in autocomplete suggestions.
        
//         The pattern is: colorName: "var(--your-css-variable)"
        
//         When you type bg-surface or text-muted, IntelliSense will suggest these,
//         and Tailwind will compile them to use your CSS variables.
//       */
//       colors: {
//         // Background colors
//         bg: "var(--color-bg)",
//         surface: "var(--color-surface)",
        
//         // Text colors
//         text: {
//           DEFAULT: "var(--color-text)",
//           muted: "var(--color-text-muted)",
//         },
        
//         // Border color
//         border: "var(--color-border)",
        
//         // Accent colors
//         accent: {
//           DEFAULT: "var(--color-accent)",
//           hover: "var(--color-accent-hover)",
//         },
//       },
      
//       /*
//         You can also extend other theme properties to use your design tokens.
//         This makes your entire design system available through autocomplete.
//       */
//       borderRadius: {
//         sm: "var(--radius-sm)",
//         DEFAULT: "var(--radius)",
//         md: "var(--radius-md)",
//         lg: "var(--radius-lg)",
//         xl: "var(--radius-xl)",
//         "2xl": "var(--radius-2xl)",
//         "3xl": "var(--radius-3xl)",
//       },
      
//       boxShadow: {
//         sm: "var(--shadow-sm)",
//         DEFAULT: "var(--shadow)",
//         md: "var(--shadow-md)",
//         lg: "var(--shadow-lg)",
//         xl: "var(--shadow-xl)",
//       },
      
//       transitionDuration: {
//         fast: "var(--transition-fast)",
//         DEFAULT: "var(--transition-base)",
//         slow: "var(--transition-slow)",
//       },
      
//       fontFamily: {
//         sans: "var(--font-sans)",
//         mono: "var(--font-mono)",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;