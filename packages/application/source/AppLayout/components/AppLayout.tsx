import { Overlay, SlotProps } from "@coolui/core"
import { cn } from "@coolui/styles"

import { Layout } from "../lib/layout"
import { AppLayoutProps, Config, Content, LogoPosition, State } from "../lib/types"

// ============================================================================
// Sidebar Toggle Button Component
// ============================================================================

const SidebarToggleButton = ({ onClick }: { onClick?: () => void }) => (
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

// ============================================================================
// Logo Component
// ============================================================================

const LogoComponent = ({
    logoName,
    logoSrc
}: {
    logoName?: string
    logoSrc?: string
}) => (
    <div className={cn(
        "flex items-center gap-3",
        // Transitions
        "transition-opacity duration-200",
    )}>
        {logoSrc && (
            <img
                src={logoSrc}
                alt={logoName || "Logo"}
                className={cn(
                    "h-8 w-8 object-contain",
                    // Smooth image rendering
                    "antialiased",
                )}
            />
        )}
        {logoName && (
            <span className={cn(
                "font-semibold text-lg",
                "tracking-tight",
            )}>
                {logoName}
            </span>
        )}
        {!logoSrc && !logoName && (
            <div className={cn(
                "h-8 w-8 rounded-lg",
                "gradient-to-br from-primary to-blue-600",
                "flex items-center justify-center",
                "text-typo-heading font-bold text-sm",
            )}>
                CoolUI
            </div>
        )}
    </div>
);

// ============================================================================
// AppLayout Component
// ============================================================================

export const AppLayout = (props: AppLayoutProps) => {

    const content: Content = {
        ...props
    }

    const state: State = {
        ...props
    }

    const config: Config = {
        footerEnabled: true,
        headerEnabled: true,
        sidebarEnabled: true,
        headerFixed: true,
        logoEnabled: true,
        logoPosition: 'both',
        sidebarPosition: 'left',
        headerBordered: state.headerIsScrolled ?? false,
        ...props
    }

    return <Layout
        // Main content area
        main={{
            children: content.children,
            // className: cn("px-4 py-6 mobile:px-6 mobile:py-8 laptop:px-8",)
        }}

        // Footer
        footer={{
            remove: !config.footerEnabled,
            children: content.footer
        }}

        // Header
        headerWrapper={{
            remove: !config.headerEnabled,
            className: cn(
                // Border transition
                config.headerBordered ? "border-border shadow-sm" : "border-transparent",
                // Fixed positioning
                config.headerFixed && "sticky top-0 z-30",
                // Backdrop blur for glass effect
                config.headerFixed && "backdrop-blur-md bg-(--cool-header-bg)/95",
            )
        }}
        headerToolbar={{
            children: <>
                {config.sidebarEnabled && <SidebarToggleButton onClick={state.toggleSidebar} />}
                {content.headerToolbar}
            </>
        }}
        headerLogo={{
            children: config.logoEnabled && (config.logoPosition === 'both' || config.logoPosition === 'header') && <LogoComponent logoName={content.logoName} logoSrc={content.logoSrc} />,
            className: cn("hidden laptop:block")
        }}
        headerActions={{
            children: content.headerActions
        }}

        // Sidebar
        sidebarWrapper={{
            remove: !config.sidebarEnabled,
            className: cn(
                // Position (left or right)
                config.sidebarPosition === 'right' ? 'order-2' : 'order-0',
                // Slide animation state
                state.sidebarIsOpen ? 'translate-x-0' : config.sidebarPosition === 'right' ? 'translate-x-full laptop:translate-x-0' : '-translate-x-full laptop:translate-x-0',
            )
        }}

        // Overlay
        overlay={{
            remove: !config.sidebarEnabled,
            children: <Overlay isOpen={state.sidebarIsOpen} onClick={state.closeSidebar} />
        }}

        // Sidebar content sections
        sidebarLogo={{
            children: config.logoEnabled && (config.logoPosition === 'both' || config.logoPosition === 'sidebar') && <LogoComponent logoName={content.logoName} logoSrc={content.logoSrc} />,
            className: cn("laptop:hidden")
        }}
        sidebarHeader={{
            remove: !content.sidebarHeader,
            children: content.sidebarHeader,
        }}
        sidebarNavigation={{
            remove: !content.sidebarNavigation,
            children: content.sidebarNavigation,
        }}
        sidebarToolbar={{
            remove: !content.sidebarToolbar,
            children: content.sidebarToolbar,
        }}
        sidebarFooter={{
            remove: !content.sidebarFooter,
            children: content.sidebarFooter,
        }}
    />
}

AppLayout.displayName = "AppLayout"