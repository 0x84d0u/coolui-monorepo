import { Container } from '@coolui/core'
import { SectionProps } from './types'
import { Body, Footer, Header, Wrapper } from '../lib/item.slots'


export const Section = ({
    spacing,
    colorTheme,
    borders,
    headingSize,
    containerSize,
    alignFooter,
    layout,

    title,
    subtitle,
    headerActions,
    footer,
    
    id,
    children,
    className,
}: SectionProps) => {
    return <Wrapper
        colorTheme={colorTheme}
        spacing={spacing}
        borders={borders}
        className={className}
        id={id}
    >
        <Container size={containerSize}>
            <Header
                spacing={spacing}
                headingSize={headingSize}
                title={title}
                subtitle={subtitle}
                headerActions={headerActions}
            />
            <Body
                layout={layout}
            >
                {children}
            </Body>
            <Footer
                spacing={spacing}
                alignFooter={alignFooter}
                children={footer}
            />
        </Container>
    </Wrapper>
}