import { cn } from "@coolui/styles"
import { SidebarConfig } from "../types"

export const PageSidebar = ({
    sidebarContent,
    sidebarPosition = 'left',
}: SidebarConfig) => {
    if (!sidebarContent) return null
    
    return (
        <aside 
            role="complementary" 
            className={cn(
                "w-full laptop:w-64 laptop:shrink-0",                
                "laptop:sticky laptop:top-0 laptop:max-h-svh laptop:flex laptop:flex-col",
                // "laptop:h-svh laptop:min-h-svh",
                "border-border", sidebarPosition === 'right'  ? 'laptop:order-2 laptop:border-l'  : "laptop:border-r",                
            )}
        >
            {/* Top spacer for header height */}
            <div className="h-(--header-height)" />
            
            {/* Scrollable content area */}
            <div className={cn(
                // Flex-1 to fill remaining space
                "laptop:flex-1 laptop:overflow-y-auto",
            
                // Padding
                "py-8 laptop:py-6",
                "px-4 laptop:px-6",
            )}>
                {sidebarContent}
            </div>
        </aside>
    )
}