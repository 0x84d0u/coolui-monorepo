import { cn } from "@coolui/styles";
import { PageSidebarProps } from "./types";
import { Section } from "@/server";

export const PageSidebar = ({
    enableSidebar,
    sidebar,
    sidebarPosition,
    toc,

}: PageSidebarProps) => {
    
    if (!enableSidebar && !toc) return null;
    const isLeft = sidebarPosition === 'left'
    const className = cn(
        !isLeft && 'order-1',
        "w-full laptop:w-64",
        "sticky top-0"
    )
    return <Section className={className}>
        {sidebar}
    </Section>


}