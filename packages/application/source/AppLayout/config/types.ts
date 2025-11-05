export type LayoutConfig = {
    root: {
        template?: 'default'
    },
    sidebar: {
        enabled: boolean,
        template?: 'default'
    },
    header: {
        enabled: boolean,
        template?: 'default'
        position?: 'top' | 'bottom'
        fixed?: boolean
    },
    footer: {
        enabled: boolean,
        template?: 'default'

    }
}

