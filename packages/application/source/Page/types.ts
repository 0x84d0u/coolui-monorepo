import { Children, ContainerSize } from "@coolui/core"


export type TocItem = {
    title: string
    id: string
}



export type SectionsConfig = {
    alternateSections?: boolean
    sectionProps?: SectionConfig
    children?: React.ReactNode
}
export type SectionConfig = {
    spacing?: 'compact' | 'comfortable' | 'large' | 'huge',
    colorTheme?: 'primary' | 'secondary' | 'teritary',
    borders?: 'top' | 'bottom' | 'both'
    headingSize?: "display" | "page" | "section"
    containerSize?: ContainerSize
    alignFooter?: 'start' | 'center' | 'end' | 'between'
    layout?: 'stacked' | 'grid' | 'split' | 'center'

    id?: string,
    className?: string,
    
    title?: string
    description?: string
    headerContent?: Children
    footerContent?: Children
    children?: Children,
}

export type HeaderConfig = {
    title?: string
    description?: string
}
export type TocConfig = {
    tocItems?: TocItem[]
    activeTocId?: string | null
}

export type SidebarConfig = {
    sidebarContent?: Children
    sidebarPosition?: 'left' | 'right'
}
export type FooterConfig = {
    footerContent?: Children
}

export type RootConfig = {
    children?: Children
}