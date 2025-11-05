import { Container } from '@coolui/core'
import { SectionContent, SectionOptions } from '../components-ui/types'
import { SectionBody, SectionFooter, SectionHeader, SectionWrapper } from '../components-ui/section.slots'

export type SectionProps = SectionOptions & SectionContent & {
    className?: string
}

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

    className
}: SectionProps) => {
    return <SectionWrapper
        colorTheme={colorTheme}
        spacing={spacing}
        borders={borders}
        className={className}
    >
        <Container size={containerSize}>
            <SectionHeader
                spacing={spacing}
                headingSize={headingSize}
                title={title}
                subtitle={subtitle}
                headerActions={headerActions}
            />
            <SectionBody
                layout={layout}
            >
                {children}
            </SectionBody>
            <SectionFooter
                spacing={spacing}
                alignFooter={alignFooter}
                children={footer}
            />
        </Container>
    </SectionWrapper>
}