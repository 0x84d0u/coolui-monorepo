import { ChildrenComponent } from "@coolui/core";
import { PageFooter } from "./PageFooter/PageFooter";
import { PageHeader } from "./PageHeader/PageHeader";
import { PageSections } from "./PageSections/PageSections";
import { PageSidebar } from "./PageSidebar/PageSidebar";
import { PageToc } from "./PageToc/PageToc";
import type {
    RootConfig,
    FooterConfig,
    HeaderConfig,
    SidebarConfig,
    TocConfig,
} from "./types"

export type PageProps = RootConfig & SidebarConfig & HeaderConfig & FooterConfig & TocConfig;

export const Page = (props: PageProps) => {
    return <Root>
        <PageSidebar
            {...props}
            sidebarContent={(props.tocItems && props.tocItems.length > 0) || props.sidebarContent && <>
                <PageToc {...props} />
                {props.sidebarContent}
            </>}
        />
        <Wrapper>
            <PageHeader  {...props} />
            <PageSections>
                {props.children}
            </PageSections>
            <PageFooter {...props} />
        </Wrapper>
    </Root>
}

const Root = (props: ChildrenComponent) => <div className="flex flex-col laptop:flex-row">{props.children}</div>
const Wrapper = (props: ChildrenComponent) => <div className="flex-1 flex flex-col">{props.children}</div>
