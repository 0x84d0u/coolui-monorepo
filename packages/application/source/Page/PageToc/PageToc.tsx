import { cn } from "@coolui/styles"
import { TocConfig } from "../types"


export const PageToc = ({
    tocItems,
    activeTocId,
}: TocConfig) => {
    if (!tocItems || tocItems.length < 1) return null
    return <nav id="page-nav" className="sticky top-20 space-y-2">
        {tocItems.map(({ id, title }) => {
            const isActive = activeTocId === id
            return <button
                key={id}
                data-id={id}
                className={cn(
                    "block text-sm text-left transition-colors",
                    isActive ? "text-blue-600 font-semibold" : "text-gray-500 hover:text-gray-800"
                )}
            >
                {title}
            </button>
        })}
    </nav>
}