"use client";

import { useTheme } from "./useTheme";



export const ColorTestCard = () => {
  const { theme, colorScheme } = useTheme();

  // Wait for hydration
  if (!theme || !colorScheme) {
    return (
      <div className="p-8 rounded-lg border border-dashed animate-pulse">
        <div className="h-10 w-full rounded bg-gray-500" />
        <div className="mt-2 h-6 w-1/2 rounded bg-gray-500" />
      </div>
    );
  }

  return (
    <div className="border border-card p-8 rounded-lg bg-card text-card-foreground shadow-lg transition-all">
      <div className="text-lg font-bold">Current State</div>
      
      {/* Show the current state from the hook */}
      <div className="mt-2">
        Active Theme: <span className="font-mono p-1 bg-gray-700 rounded text-white">{theme}</span>
      </div>
      <div>
        Active Mode: <span className="font-mono p-1 bg-gray-700 rounded text-white">{colorScheme}</span>
      </div>

      <div className="mt-6 pt-6 border-t border-card-foreground/20">
        <div className="font-bold">Testing `--color-primary`:</div>
        
        {/*
          * These utilities automatically use var(--color-primary)
          * and var(--color-primary-foreground)
        */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <div className="h-20 w-20 rounded-lg bg-primary flex items-center justify-center text-primary-foreground transition-all">
            bg-primary
          </div>
          <div className="text-primary text-xl font-semibold transition-all">
            This is text-primary
          </div>
          <div className="h-20 w-20 rounded-lg border-8 border-primary transition-all" />
        </div>
      </div>
    </div>
  );
};