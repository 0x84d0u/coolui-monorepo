import { cn } from "@coolui/styles";
import { SidebarConfig } from "../types";

export const AppOverlay = ({ 
    sidebarIsOpen, 
    closeSidebar 
}: SidebarConfig) => {
    if (!sidebarIsOpen) return null;
    
    return (
        <div
            className={cn(
                // Positioning
                "fixed inset-0",
                "top-(--header-height)",
                `z-20`,
                
                // Appearance
                "bg-overlay",
                "backdrop-blur-sm",
                
                // Animation
                // "animate-fade-in",
                
                // Only show on mobile/tablet
                "laptop:hidden",
                
                // Print
                // "cool-no-print",
            )}
            onClick={closeSidebar}
            aria-label="Close sidebar"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    closeSidebar?.();
                }
            }}
        />
    );
};