import { Container } from "@coolui/core"
import { cn } from "@coolui/styles"
import type { Config } from "./types"

export const Wrapper = (props: Pick<Config, 'headerFixed'> & {
    children: React.ReactNode
    showBorder: boolean
}) => {
    return <header
        className={cn(
            "bg-(--cool-header-bg) text-(--cool-header-color)",
            "border-b transition-colors duration-200",
            props.showBorder ? "border-border" : "border-transparent",
            props.headerFixed ? "sticky top-0 z-30" : "",
        )}
    >
        <Container className='grid grid-cols-3 items-center h-(--cool-header-height)' >
            {props.children}
        </Container>
    </header>
}

export const ToolbarWrapper = (props: { children?: React.ReactNode}) => <div className="flex items-center gap-3">{props.children}</div>
export const LogoWrapper = (props: { children?: React.ReactNode}) => <div className="flex items-center justify-self-center">{props.children}</div>
export const ActionsWrapper = (props: { children?: React.ReactNode}) => <div className="flex items-center justify-end gap-2">{props.children}</div>