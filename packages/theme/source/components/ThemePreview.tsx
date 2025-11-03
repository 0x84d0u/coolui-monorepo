'use client';
 import '@coolui/styles/index.css';

import { useTheme } from '@/hooks/useTheme'

export function ThemePreview() {
  const { themeName, themeMode, mounted } = useTheme()

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-32 text-muted">
        Loading preview...
      </div>
    )
  }

  return (
    <div className="space-y-8 p-6 bg-body text-typo-body">
      {/* Preview Card */}
      <div className="bg-surface border border-subtle rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-semibold text-typo-heading">Theme Preview</h3>

        <p className="text-sm text-typo-muted">
          This card demonstrates how your theme looks with different text and background colors.
        </p>

        <div className="flex gap-3">
          <div className="size-8 rounded-full bg-blue-500" />
          <div className="size-8 rounded-full bg-green-500" />
          <div className="size-8 rounded-full bg-purple-500" />
        </div>

        <div className="flex gap-3">
          <button className="bg-accent text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition">
            Primary
          </button>
          <button className="bg-muted text-typo-body px-4 py-2 rounded-md font-medium hover:opacity-90 transition">
            Secondary
          </button>
        </div>

        <div className="flex items-start gap-2 bg-info/10 border border-info/20 p-3 rounded-md">
          <span className="text-info text-lg">ℹ️</span>
          <p className="text-sm text-typo-subtle">
            This is how informational content appears in your theme.
          </p>
        </div>
      </div>

      {/* Theme Info */}
      <div className="bg-surface border border-subtle rounded-xl p-6 shadow-sm">
        <div className="grid gap-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium text-typo-muted">Theme:</span>
            <span>{themeName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-typo-muted">Mode:</span>
            <span>{themeMode}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-typo-muted">HTML Class:</span>
            <code>{themeMode === 'dark' ? '.dark' : 'none'}</code>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-typo-muted">Data Attribute:</span>
            <code>{themeName !== 'default' ? `data-theme="${themeName}"` : 'none'}</code>
          </div>
        </div>
      </div>
    </div>
  )
}
