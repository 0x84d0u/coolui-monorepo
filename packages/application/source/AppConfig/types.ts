export type AppConfig = {
    root: {
        template?: 'default'

    },
    sideabar: {
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

