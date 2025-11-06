import React from "react"
import { Layout } from "../components-ui/group.layout"

export type SectionGroupProps = {
    children?: React.ReactNode
}

export const SectionGroup = ({ 
    children
 }: SectionGroupProps) => {
    return <Layout
        children={children}
    />
}