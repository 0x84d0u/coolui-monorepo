
import * as Root from './root.slot';
import * as Header from './header.slot';
import * as Content from './content.slot';
import * as Footer from './footer.slot';
import { Container, ContainerProps } from '@coolui/core';

export type PageSectionProps = {
    spacing?: Root.Props['spacing']

    theme?: Root.Props['theme']
    height?: Root.Props['height']
    borders?: Root.Props['border']

    containerSize?: ContainerProps['size']

    intent?: Header.Props['intent']
    title?: Header.Props['title']
    subtitle?: Header.Props['subtitle']
    alignHeader?: Header.Props['align']
    headerContent?: Header.Props['extra']

    layout?: Content.Props['layout']
    children?: Content.Props['children']


    alignFooter?: Footer.Props['align']
    footerContent?: Footer.Props['children']

    classNames?: {
        root?: Root.Props['className']
        header?: Header.Props['className']
        content?: Content.Props['className']
        container?: ContainerProps['className']
        footer?: Footer.Props['className']
    }
}

export const PageSection = ({
    classNames,

    borders,
    height,
    spacing = 'comfortable',
    theme,

    containerSize = 'lg',

    intent,
    title,
    subtitle,
    alignHeader,
    headerContent,

    layout,
    children,

    alignFooter,
    footerContent,
}: PageSectionProps) => {
    return <Root.Slot
        className={classNames?.root}
        border={borders}
        height={height}
        spacing={spacing}
        theme={theme}
    >
        <Container size={containerSize} className={classNames?.container}>
            <Header.Slot
                className={classNames?.header}
                align={alignHeader}
                extra={headerContent}
                intent={intent}
                title={title}
                subtitle={subtitle}
            />
            <Content.Slot
                className={classNames?.content}
                spacing={spacing}
                layout={layout}
            >
                {children}
            </Content.Slot>
            <Footer.Slot
                className={classNames?.footer}
                align={alignFooter}
                spacing={spacing}
                children={footerContent}
            />
        </Container>
    </Root.Slot>
}