import { cn } from "@coolui/styles";

export const AppSidebarToggle = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className={cn(
            // Base styling
            "inline-flex items-center justify-center",
            "rounded-lg",
            // Size
            "h-10 w-10",
            // Colors
            "text-(--cool-header-color)",
            "hover:bg-(--cool-header-hover)",
            "active:bg-(--cool-header-active)",
            // Transitions
            "transition-colors duration-150",
            // Focus
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--cool-focus-ring)",
            // Accessibility
            "laptop:hidden", // Hide on laptop since sidebar is always visible
        )}
        aria-label="Toggle sidebar"
        aria-expanded="false"
    >
        <svg
            className="h-5 w-5"
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