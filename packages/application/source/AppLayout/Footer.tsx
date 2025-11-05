import React from 'react'
import * as Slot from './slots'
import { AppConfig } from '@/AppConfig/types'
import { AppState } from '@/AppState/types'


export type FooterProps = {
    appConfig: AppConfig
    appState?: AppState
    content?: {
        footer?: React.ReactNode
    }
}

export const Footer = ({
    appConfig,
    // appState,
    content
}: FooterProps) => {
    if (!appConfig.footer.enabled) return false

    return <Slot.FooterWrapper>
        {content?.footer}
    </Slot.FooterWrapper>
}