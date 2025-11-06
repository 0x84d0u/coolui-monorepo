import type { ContainerSize } from "@coolui/core"

export type GroupConfig = {
    alternateSections?: boolean
}

export type Config = {
    spacing?: 'compact' | 'comfortable' | 'large' | 'huge',
    colorTheme?: 'primary' | 'secondary' | 'teritary',
    borders?: 'top' | 'bottom' | 'both'
    headingSize?: "display" | "page" | "section"
    containerSize?: ContainerSize
    alignFooter?: 'start' | 'center' | 'end' | 'between'
    layout?: 'stacked' | 'grid' | 'split' | 'center'
}

