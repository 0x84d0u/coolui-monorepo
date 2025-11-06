import React from "react"
import { cn } from "@coolui/styles"
import { Container } from "@coolui/core"

export const Layout = ({
    hasBorder,
    isFixed,
    toolbar,
    logo,
    actions
}: {
    hasBorder?: boolean
    isFixed?: boolean
    toolbar?: React.ReactNode
    logo?: React.ReactNode
    actions?: React.ReactNode
}) => {

    return <Wrapper hasBorder={hasBorder} isFixed={isFixed}>
        <Container className='grid grid-cols-3 items-center h-(--cool-header-height)'>
            <Toolbar>
                {toolbar}
            </Toolbar>
            <Logo>
                {logo}
            </Logo>
            <Actions>
                {actions}
            </Actions>
        </Container>
    </Wrapper>
}

export const Wrapper = ({
    hasBorder,
    isFixed,
    children
}: {
    children?: React.ReactNode
    hasBorder?: boolean
    isFixed?: boolean
}) => {
    return <header
        className={cn(
            "bg-(--cool-header-bg) text-(--cool-header-color)",
            "border-b transition-colors duration-200",
            hasBorder ? "border-border" : "border-transparent",
            isFixed ? "sticky top-0 z-30" : "",
        )}
    >
        {children}
    </header>
}


export const Toolbar = ({
    children
}: {
    children?: React.ReactNode
}) => {
    return <div className="flex items-center gap-3">{children}</div>
}

export const Logo = ({
    children
}: {
    children?: React.ReactNode
}) => {
    return <div className="flex items-center justify-self-center">{children}</div>
}


export const Actions = ({
    children
}: {
    children?: React.ReactNode
}) => {
    return <div className="flex items-center justify-end gap-2">{children}</div>
}

