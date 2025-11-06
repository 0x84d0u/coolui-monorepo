"use client"

import { useTheme } from "../../Theme/utils/useTheme"
import { HeaderAction } from "../components-ui/HeaderAction"

export const ToggleTheme = () => {
  const {
    mounted,
    themeMode,
    toggleMode,
  } = useTheme()

  // Avoid rendering until mounted (prevents hydration mismatch)
  if (!mounted) return null

  const isDark = themeMode === "dark"

  return (
    <HeaderAction
      onClick={toggleMode}
      label="Toggle Theme"
      icon={
        isDark ? (
          // 🌙 Dark mode icon (moon)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path d="M21.64 13.65A9 9 0 0 1 10.35 2.36a1 1 0 0 0-1.1 1.45A7 7 0 1 0 20.19 14.75a1 1 0 0 0 1.45-1.1z" />
          </svg>
        ) : (
          // 🌞 Light mode icon (sun)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )
      }
    />
  )
}

ToggleTheme.displayName = "ToggleTheme"