import { SectionGroupConfig, SectionGroupContent } from "@/server"
import React from "react"

export type Config = {
    enableSidebar?: boolean
    sidebarPosition?: 'left' | 'right'
} & SectionGroupConfig

export type Content = {
    title?: string
    description?: string
    sidebar?: React.ReactNode
} & SectionGroupContent