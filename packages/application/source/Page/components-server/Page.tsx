import React from "react"
import { SectionGroup } from "../../Section/components-server/SectionGroup"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

export type PageProps = {
    title?: string
    description?: string
    sidebar?: React.ReactNode
    sidebarPosition?: 'left' | 'right'
    children?: React.ReactNode
}

export const Page = ({
    title,
    description,
    sidebar,
    sidebarPosition = 'left',
    children,
}: PageProps) => {
    return (
        <div className="flex flex-col laptop:flex-row">
            <Sidebar 
                position={sidebarPosition}
                children={sidebar}
            />
            <SectionGroup>
                <Header 
                    title={title}
                    description={description}
                />
                {children}
            </SectionGroup>
        </div>
    )
}

Page.displayName = "Page"