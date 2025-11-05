// export const Toc = () => {
//   return (
//     <aside className="hidden lg:block col-span-3 sticky top-24 self-start">
//       <div className="text-sm text-typo-dim font-medium">Table of Contents</div>
//       {/* TOC links can be injected or rendered statically here */}
//     </aside>
//   )
// }

import { PageConfig } from "../config/types"
import { TableOfContentWrapper } from "../components-ui/page.slots"
import { Section } from "./Section"
import { cn } from "@coolui/styles"
import { Typography } from "@coolui/typography"

export type TableOfContentProps = {
    config: PageConfig
}

export const TableOfContent = ({
    config
}: TableOfContentProps) => {
    if (!config?.toc?.enabled) return null;

    const isLeft = config.toc.position === 'right'

    return <Section 
    className={cn(
        !isLeft && 'order-1',
        "w-full laptop:w-64", 
        "sticky top-0"
    )}>
        <Typography.Body> Products </Typography.Body>
        <Typography.Body> Featured </Typography.Body>
        <Typography.Body> Call to action</Typography.Body>
    </Section>
}

const TableOfContentItem = () => {
    return 
}