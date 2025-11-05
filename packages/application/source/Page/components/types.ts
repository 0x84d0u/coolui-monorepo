import type { SectionGroupContent } from "@/server"
import type { Config, Content } from "../lib/types"

export type PageHeaderProps = {
    content?: Pick<Content, 'title' | 'description'>
}

export type PageSidebarProps = {
    content?: Pick<Content, 'sidebar'>
    config?: Pick<Config, 'enableSidebar' | 'sidebarPosition'>
}

export type PageProps = Config & Omit<Content, 'sections'> & {
    children?: SectionGroupContent['sections']
}