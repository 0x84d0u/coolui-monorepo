import React from 'react'
import * as Slot from './slots'
import { Container } from '@coolui/core'

export type AppPageSectionProps = {
    children?: React.ReactNode
}

export const AppPageSection = ({
    children
}: AppPageSectionProps) => {
    return <Slot.SectionWrapper>
        <Container>
            <Slot.SectionBody>
                {children}
            </Slot.SectionBody>
        </Container>
    </Slot.SectionWrapper>
}