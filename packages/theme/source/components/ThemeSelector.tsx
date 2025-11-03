'use client'

import { useTheme } from '@/hooks/useTheme'

export function ThemeSelector() {
  const {
    themeName,
    themeMode,
    themes,
    setThemeName,
    setThemeMode,
    toggleMode,
    mounted,
  } = useTheme()

  if (!mounted) {
    return (
      <div className="p-6 border border-subtle rounded-lg bg-surface text-typo-muted">
        <h2 className="text-lg font-semibold mb-4">Theme Settings</h2>
        <div className="animate-pulse text-sm">Loading...</div>
      </div>
    )
  }

  return (
    <div className="space-y-8 p-6 bg-surface border border-subtle rounded-xl text-typo-body shadow-sm">
      <h2 className="text-lg font-semibold text-typo-heading">Theme Settings</h2>

      {/* Theme Options */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-typo-muted">Theme</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {themes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => setThemeName(theme.value)}
              className={`w-full p-3 rounded-md border transition 
                ${
                  themeName === theme.value
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-subtle hover:bg-muted/50'
                }`}
            >
              <div className="font-medium">{theme.label}</div>
              {theme.description && (
                <div className="text-xs text-typo-muted">{theme.description}</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Mode Options */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-typo-muted">Mode</label>
        <div className="flex gap-3">
          <button
            onClick={() => setThemeMode('light')}
            className={`flex flex-col items-center justify-center w-full p-3 rounded-md border transition
              ${
                themeMode === 'light'
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-subtle hover:bg-muted/50'
              }`}
          >
            <span className="text-xl">☀️</span>
            <span className="text-sm font-medium mt-1">Light</span>
          </button>

          <button
            onClick={() => setThemeMode('dark')}
            className={`flex flex-col items-center justify-center w-full p-3 rounded-md border transition
              ${
                themeMode === 'dark'
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-subtle hover:bg-muted/50'
              }`}
          >
            <span className="text-xl">🌙</span>
            <span className="text-sm font-medium mt-1">Dark</span>
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleMode}
        className="bg-accent text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
      >
        Toggle Mode
      </button>

      {/* Current Theme Info */}
      <div className="text-sm text-typo-muted">
        <strong className="text-typo-heading">Current:</strong>{' '}
        {themes.find((t) => t.value === themeName)?.label || themeName} ({themeMode})
      </div>
    </div>
  )
}
