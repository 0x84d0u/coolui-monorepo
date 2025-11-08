import { Children, Container } from "@coolui/core"
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
    return <Wrapper className={cn(
        headerBordered ? "border-border shadow-sm" : "border-transparent",
        headerFixed && "sticky top-0 z-30",
        headerFixed && "backdrop-blur-md bg-(--cool-header-bg)/95",
    )}>
        <Container className={cn(
            "h-(--cool-header-height) min-h-(--cool-header-height)",
            "grid grid-cols-[1fr_auto_1fr] items-center gap-4",
        )}>
            <div className="flex items-center gap-3 justify-start">
                {headerToolbarContent}
            </div>
            <div className="flex items-center justify-center shrink-0">
                <AppLogo {...logoConfig} className="hidden laptop:block" />
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

const Wrapper = (props: {
    children?: Children
    className?: string
}) => <header
    className={cn(
        // Theme colors
        "bg-(--cool-header-bg) text-(--cool-header-color)",
        // Border with smooth transition
        "border-b transition-colors duration-200",
        // Prevent shrinking
        "shrink-0",
        // Print modifications
        "print:static print:border-b-2",
        props.className
    )}
>
        {props.children}
    </header>
