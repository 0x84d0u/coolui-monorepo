import { cn } from "@coolui/styles"
import { TocConfig } from "../types"


export const PageToc = ({
    tocItems,
    activeTocId,
}: TocConfig) => {
    if (!tocItems || tocItems.length < 1) return null
    
    return <nav 
        id="page-toc" 
        className={cn(
            "sticky top-20",
            "space-y-1",
            "p-4",
        )}
        aria-label="Table of contents"
    >
        <div className={cn(
            "text-xs font-semibold uppercase tracking-wide",
            "text-typo-muted",
            "mb-3",
        )}>
            On This Page
        </div>
        {tocItems.map(({ id, title }) => {
            const isActive = activeTocId === id
            return <button
                key={id}
                data-id={id}
                className={cn(
                    // Base
                    "cool-toc-item",
                    "block w-full text-left",
                    "text-sm py-1.5 px-3 rounded-md",
                    
                    // Transitions
                    "transition-colors duration-100",
                    
                    // States
                    isActive ? [
                        "text-layout-typoActive font-semibold",
                        "bg-layout-bgActive",
                    ] : [
                        "text-layout-typoMuted",
                        "hover:text-layout-typo",
                        "hover:bg-layout-bgHover",
                    ],
                    
                    // Focus
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring)",
                )}
                aria-current={isActive ? "location" : undefined}
            >
                {title}
            </button>
        })}
    </nav>
}