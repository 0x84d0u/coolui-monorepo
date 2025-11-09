import { cn } from "@coolui/styles";

export const AppSidebarToggle = ({ 
    onClick,
    isOpen = false 
}: { 
    onClick?: () => void
    isOpen?: boolean 
}) => (
    <button
        onClick={onClick}
        className={cn(
            // Base styling
            "inline-flex items-center justify-center",
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
            
            // Hide on laptop since sidebar is always visible
            "laptop:hidden",
        )}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        aria-expanded={isOpen}
    >
        <svg
            className={cn(
                "h-5 w-5",
                "transition-transform duration-100",
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    </button>
);