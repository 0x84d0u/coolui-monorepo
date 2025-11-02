
'use client';

import React from 'react';
import { useTheme } from '../lib/context';

export function ThemePreview() {
  const { themeName, themeMode, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="theme-preview-skeleton">
        <div>Loading preview...</div>
      </div>
    );
  }

  return (
    <div className="theme-preview-container">
      <div className="theme-preview-card">
        <h3 className="theme-preview-title">Theme Preview</h3>
        
        <p className="theme-preview-text">
          This card demonstrates how your theme looks with different text and background colors.
        </p>

        <div className="theme-preview-swatches">
          <div className="swatch swatch-blue"></div>
          <div className="swatch swatch-green"></div>
          <div className="swatch swatch-purple"></div>
        </div>

        <div className="theme-preview-buttons">
          <button className="btn-primary">Primary</button>
          <button className="btn-secondary">Secondary</button>
        </div>

        <div className="theme-preview-info">
          <div className="info-icon">ℹ️ Information</div>
          <div className="info-text">
            This is how informational content appears in your theme.
          </div>
        </div>
      </div>

      <div className="theme-info-card">
        <div className="theme-info-grid">
          <div className="theme-info-row">
            <span className="theme-info-key">Theme:</span>
            <span className="theme-info-value">{themeName}</span>
          </div>
          <div className="theme-info-row">
            <span className="theme-info-key">Mode:</span>
            <span className="theme-info-value">{themeMode}</span>
          </div>
          <div className="theme-info-row">
            <span className="theme-info-key">HTML Class:</span>
            <code className="theme-info-code">
              {themeMode === 'dark' ? '.dark' : 'none'}
            </code>
          </div>
          <div className="theme-info-row">
            <span className="theme-info-key">Data Attribute:</span>
            <code className="theme-info-code">
              {themeName !== 'default' ? `data-theme="${themeName}"` : 'none'}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
