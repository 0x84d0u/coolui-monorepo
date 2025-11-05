import { ContainerProps } from "@coolui/core"
import React from "react"

export type SectionOptions = {
    spacing?: 'compact' | 'comfortable' | 'large' | 'huge',
    
    colorTheme?: 'primary' | 'secondary' | 'teritary',
    borders?: 'top' | 'bottom' | 'both'

    headingSize?: "display" | "page" | "section"

    containerSize?: ContainerProps['size']
    
    alignFooter?: 'start' | 'center' | 'end' | 'between'

    layout?: 'stacked' | 'grid' | 'split' | 'center'
} 

export type SectionContent = {
    title?: string
    subtitle?: string
    headerActions?: React.ReactNode
    footer?: React.ReactNode
    children?: React.ReactNode
}