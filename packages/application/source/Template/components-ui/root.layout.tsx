import React from "react"


export const Layout = ({ 
    sidebar,
    overlay,
    header,
    footer,
    children,
}: {
    sidebar?: React.ReactNode
    overlay?: React.ReactNode
    header?: React.ReactNode
    footer?: React.ReactNode
    children?: React.ReactNode
}) => {
    return <Wrapper>
        {sidebar}
        {overlay}
        <SidebarOff>
            {header}
            <Main>
                {children}
            </Main>
            {footer}
        </SidebarOff>
    </Wrapper>
}
export const Wrapper = (props: { children: React.ReactNode }) => <div className="relative flex min-h-svh h-full ">{props.children} </div>
export const SidebarOff = (props: { children: React.ReactNode }) => <div className="min-h-svh flex-1 flex flex-col">{props.children}</div>
export const Main = (props: { children: React.ReactNode }) => <main className="flex-1 overflow-y-auto"> {props.children}</main>