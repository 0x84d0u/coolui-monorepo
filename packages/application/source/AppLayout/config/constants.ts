import type { LayoutConfig } from "./types"

export const DEFAULT_LAYOUT_CONFIG : LayoutConfig = {
    root: {
        template: 'default'
    },
    header: {
        enabled: true,
        template: 'default',
        position: 'top',
        fixed: true
    },
    footer: {
        enabled: true,
        template: 'default'
    },
    sidebar: {
        enabled: true,
        template: 'default'
    }
}