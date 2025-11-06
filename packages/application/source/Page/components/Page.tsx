import { SectionGroup } from "@/server"
import { PageHeader } from "./PageHeader"
import { PageSidebar } from "./PageSidebar"
import { PageProps } from "./types"
import { PageToc } from "@/client"

export const Page = ({
    children,
    ...props
}: PageProps) => {

    return <div className="flex flex-col laptop:flex-row">
        <PageSidebar
            {...props}
            sidebar={<>
                {props.toc && <PageToc items={props.toc}/>}
                {props.sidebar}
            </>}
        />
        <SectionGroup {...props}  >
            <PageHeader {...props} />
            {children}
        </SectionGroup>
    </div>

}

