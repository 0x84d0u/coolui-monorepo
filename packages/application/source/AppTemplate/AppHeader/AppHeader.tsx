import { ChildrenComponent, Container } from "@coolui/core"
import { cn } from "@coolui/styles"

import { AppLogo } from "@/AppTemplate/AppLogo/AppLogo"
import { HeaderConfig, LogoConfig } from "../types";

type AppHeaderProps = HeaderConfig & LogoConfig

export const AppHeader = ({
    headerBordered,
    headerEnabled,
    headerFixed,
    headerToolbarContent,
    headerActionsContent,
    headerIsScrolled,
    ...logoConfig
}: AppHeaderProps) => {


    if (!headerEnabled) return null;
    return <Wrapper
        isBordered={headerBordered}
        isFixed={headerFixed}
    >
        <Container className={cn(
            "h-(--header-height) min-h-(--header-height)",
            "grid grid-cols-[1fr_auto_1fr] items-center gap-4",
        )}>
            <div className="flex items-center gap-3 justify-start">
                {headerToolbarContent}
            </div>
            <div className="flex items-center justify-center shrink-0">
                <AppLogo {...logoConfig} />
            </div>
            <div className="flex items-center gap-2 justify-end">
                {headerActionsContent}
            </div>
        </Container>
    </Wrapper>

}





// const Container = (props: ContainerProps) => <CoreContainer
//     className={}
//     {...props}
// />

const Wrapper = (props: ChildrenComponent & {
    className?: string
    isBordered?: boolean
    isFixed?: boolean
    isScrolled?: boolean
}) => <header
        className={cn(
            "transition-all duration-250",
            "bg-layout-bg text-layout-typo",
            "shrink-0",
            // Print modifications
            "border-b",
            props.isBordered ? "border-layout-border shadow-sm" : "border-transparent",
            props.isFixed && "sticky top-0 z-40 backdrop-blur-md backdrop-saturate-180 bg-layout-bg/95",
        )}
        children={props.children}
    />
