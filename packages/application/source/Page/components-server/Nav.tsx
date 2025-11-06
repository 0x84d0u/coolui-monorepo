import { cn } from "@coolui/styles"
import { TocItem } from "../lib/types"

export type NavProps = {
    items?: TocItem[]
    activeId?: string | null
}

export const Nav = ({
    items,
    activeId,
}: NavProps) => {
    if (!items || items.length < 1) return null
    return <nav id="page-nav" className="sticky top-20 space-y-2">
        {items.map(({ id, title }) => {
            const isActive = activeId === id
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