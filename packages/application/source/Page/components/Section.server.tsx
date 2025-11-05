import * as Slot from '../ui/slots'
import { Container } from '@coolui/core'
import { SectionContent, SectionOptions } from '../ui/types'

export type SectionProps = SectionOptions & SectionContent

export const Section = ({
    spacing = 'comfortable',
    colorTheme,
    borders,

    headingSize,

    containerSize = 'lg',
    layout,
    alignFooter,
    
    title,
    subtitle,
    headerActions,
    footer,
    children,
}: SectionProps) => {
    return <Slot.SectionWrapper 
        colorTheme={colorTheme}
        spacing={spacing}
        borders={borders}
    >
        <Container size={containerSize}>
            <Slot.SectionHeader 
                spacing={spacing}
                headingSize={headingSize}
                title={title}
                subtitle={subtitle}
                headerActions={headerActions}
            />
            <Slot.SectionBody
                layout={layout}
            >
                {children}
            </Slot.SectionBody>
            <Slot.SectionFooter 
                spacing={spacing}
                alignFooter={alignFooter}
                children={footer}
            />
        </Container>
    </Slot.SectionWrapper>
}