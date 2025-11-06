import { ReactNode } from 'react'

/**
 * Common component props
 */
export type ChildrenProp = {
    children?: ReactNode
}

export type ClassNameProp = {
    className?: string
}

export type IdProp = {
    id?: string
}

export type CommonComponentProps = ChildrenProp & ClassNameProp & IdProp

/**
 * Layout and spacing types
 */
export type Spacing = 'compact' | 'comfortable' | 'large' | 'huge'

export type ColorTheme = 'primary' | 'secondary' | 'teritary'

export type Layout = 'stacked' | 'grid' | 'split' | 'center'

export type Alignment = 'start' | 'center' | 'end' | 'between'

export type Position = 'left' | 'right'

export type Borders = 'top' | 'bottom' | 'both' | 'none'

/**
 * Heading sizes
 */
export type HeadingSize = 'display' | 'page' | 'section'

/**
 * Common layout props
 */
export type LayoutProps = {
    spacing?: Spacing
    colorTheme?: ColorTheme
    layout?: Layout
    borders?: Borders
}

/**
 * Content props
 */
export type ContentProps = {
    title?: string
    description?: string
}

/**
 * Interactive state
 */
export type InteractiveState = {
    isOpen?: boolean
    isActive?: boolean
    isDisabled?: boolean
}