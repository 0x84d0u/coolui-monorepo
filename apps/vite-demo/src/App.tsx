import { applyThemeBeforeRender } from "@coolui/theme/client";

applyThemeBeforeRender();

export default function App() {
  return <body>
     <div className="h-svh flex items-center justify-center gap-6">
      <p> Hello from Vite</p>
  </div>
  </body>
}
