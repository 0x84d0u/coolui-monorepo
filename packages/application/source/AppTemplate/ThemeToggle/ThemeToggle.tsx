"use client";

import { ThemeMode } from "@/Theme/types";
import { cn } from "@coolui/styles";

export const ThemeToggle = ({
themeMode,
mounted,
toggleMode

} : {
    themeMode?: ThemeMode
    mounted?: boolean
    toggleMode?: () => void
}) => {

    if (!mounted) {
        return <ThemeToggleSkeleton />;
    }

    const isDark = themeMode === 'dark';

    return (
        <button
            onClick={toggleMode}
            className={cn(
                // Base styling
                "relative inline-flex items-center justify-center",
                "rounded-lg",
                
                // Size
                "h-10 w-10",
                
                // Colors
                "text-layout-typo",
                "hover:bg-layout-bgHover",
                "active:bg-layout-bgActive",
                
                // Transitions
                "transition-colors duration-100",
                
                // Focus
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring)",
            )}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {/* Sun Icon (Light Mode) */}
            <svg
                className={cn(
                    "absolute h-5 w-5",
                    "transition-all duration-250",
                    isDark
                        ? "rotate-90 scale-0 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                />
            </svg>

            {/* Moon Icon (Dark Mode) */}
            <svg
                className={cn(
                    "absolute h-5 w-5",
                    "transition-all duration-250",
                    isDark
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-90 scale-0 opacity-0"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>
        </button>
    );
};

// Skeleton to prevent layout shift during hydration
const ThemeToggleSkeleton = () => (
    <div
        className={cn(
            "inline-flex items-center justify-center",
            "rounded-lg",
            "h-10 w-10",
            "bg-layout-bgHover",
            "animate-pulse",
        )}
        aria-hidden="true"
    />
);