import { SectionGroup } from "@/server"
import { PageHeader } from "./PageHeader"
import { PageSidebar } from "./PageSidebar"
import { PageProps } from "./types"

export const Page = ({
    alternateSections,
    enableSidebar,
    sidebarPosition,

    title,
    description,
    sidebar,
    children,
}: PageProps) => {

    return <div className="flex flex-col laptop:flex-row">
        <PageSidebar
            config={{ enableSidebar, sidebarPosition }}
            content={{ sidebar }}
        />
        <SectionGroup
            alternateSections={alternateSections}
        >
            <PageHeader
                content={{ title, description }}
            />
            {children}
        </SectionGroup>
    </div>

}

