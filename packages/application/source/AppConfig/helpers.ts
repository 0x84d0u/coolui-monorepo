import type { AppConfig } from "./types"

export const createAppConfig = (config: AppConfig) => config

export const defaultAppConfig = createAppConfig({
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
    sideabar: {
        enabled: true,
        template: 'default'
    }

}) 