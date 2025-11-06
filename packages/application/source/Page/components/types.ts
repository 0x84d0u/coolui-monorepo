import type { SectionGroupContent } from "@/server"
import type { Config, Content } from "../lib/types"

export type PageHeaderProps = Pick<Content, 'title' | 'description'>

export type PageSidebarProps = Pick<Config, 'enableSidebar' | 'sidebarPosition' | 'toc'> & Pick<Content, 'sidebar'>

export type PageProps = Config & Omit<Content, 'sections'> & {
    children?: SectionGroupContent['sections']
}