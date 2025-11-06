import { ContainerProps } from "@coolui/core"
import { ComponentProps } from "react"

export type GroupConfig = {
    alternateSections?: boolean
}
export type GroupContent = {
    sections?: React.ReactNode
}


export type JsxProps = ComponentProps<'section'>

export type Config = {
    spacing?: 'compact' | 'comfortable' | 'large' | 'huge',
    colorTheme?: 'primary' | 'secondary' | 'teritary',
    borders?: 'top' | 'bottom' | 'both'
    headingSize?: "display" | "page" | "section"
    containerSize?: ContainerProps['size']
    alignFooter?: 'start' | 'center' | 'end' | 'between'
    layout?: 'stacked' | 'grid' | 'split' | 'center'
}

export type Content = {
    title?: string
    subtitle?: string
    headerActions?: React.ReactNode
    footer?: React.ReactNode
    content?: React.ReactNode
}

