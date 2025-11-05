import React from 'react'
import * as Slot from './slots'
import { LayoutConfig } from '@/AppLayout/config/types'


export type FooterProps = {
    config: LayoutConfig
    content?: {
        footer?: React.ReactNode
    }
}

export const Footer = ({
    config,
    content
}: FooterProps) => {
    if (!config.footer.enabled) return null

    return <Slot.FooterWrapper>
        {content?.footer}
    </Slot.FooterWrapper>
}