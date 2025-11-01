'use client';

import React from 'react';
import { useTheme } from '../client';

export function ThemeSelector() {
  const { themeName, themeMode, themes, setThemeName, setThemeMode, toggleMode, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="theme-selector-skeleton">
        <h2 className="theme-selector-title">Theme Settings</h2>
        <div className="theme-selector-loading">
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="theme-selector">
      <h2 className="theme-selector-title">Theme Settings</h2>
      
      <div className="theme-selector-section">
        <label className="theme-selector-label">Theme</label>
        <div className="theme-grid">
          {themes.map((theme) => (
            <button
              key={theme.value}
              onClick={() => setThemeName(theme.value)}
              className={`theme-option ${themeName === theme.value ? 'theme-option-active' : ''}`}
            >
              <div className="theme-option-label">{theme.label}</div>
              {theme.description && (
                <div className="theme-option-description">{theme.description}</div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="theme-selector-section">
        <label className="theme-selector-label">Mode</label>
        <div className="mode-grid">
          <button
            onClick={() => setThemeMode('light')}
            className={`mode-option ${themeMode === 'light' ? 'mode-option-active' : ''}`}
          >
            <span className="mode-icon">☀️</span>
            <div className="mode-label">Light</div>
          </button>
          
          <button
            onClick={() => setThemeMode('dark')}
            className={`mode-option ${themeMode === 'dark' ? 'mode-option-active' : ''}`}
          >
            <span className="mode-icon">🌙</span>
            <div className="mode-label">Dark</div>
          </button>
        </div>
      </div>

      <button onClick={toggleMode} className="theme-toggle-btn">
        Toggle Mode
      </button>

      <div className="theme-current">
        <strong>Current:</strong> {themes.find(t => t.value === themeName)?.label || themeName} ({themeMode})
      </div>
    </div>
  );
}