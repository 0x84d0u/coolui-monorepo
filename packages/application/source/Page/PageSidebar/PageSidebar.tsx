import { cn } from "@coolui/styles"
import { SidebarConfig } from "../types"
import { PageSection } from "@/Page/PageSection/PageSection"

export const PageSidebar = ({
    sidebarContent,
    sidebarPosition = 'left',
}: SidebarConfig) => {
    if (!sidebarContent) return null
    
    const className = cn(
        "w-full laptop:w-64",
        "sticky top-0",
        // Order for flexbox layout
        sidebarPosition === 'right' && 'laptop:order-2'
    )
    
    return (
        <PageSection className={className}>
            {sidebarContent}
        </PageSection>
    )
}
