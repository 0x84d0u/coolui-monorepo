import React from "react"
import { cn } from "@coolui/styles"
import { Config } from "../lib/types"
import { Typography } from "@coolui/typography"
import { Container } from "@coolui/core"

export type LayoutProps = Config & {
    id?: string
    className?: string
    children?: React.ReactNode

    title?: string
    description?: string
    headerExtra?: React.ReactNode
    footer?: React.ReactNode
}

export const Layout = ({
    id,
    className,
    children,

    colorTheme = 'primary',
    spacing = 'comfortable',
    borders,
    containerSize = 'lg',
    headingSize = 'section',
    layout = 'stacked',
    alignFooter = 'start',

    title,
    description,
    headerExtra,
    footer,
}: LayoutProps) => {
    return (
        <Wrapper
            id={id}
            className={className}
            colorTheme={colorTheme}
            spacing={spacing}
            borders={borders}
        >
            <Container size={containerSize}>
                <Header
                    heading={(title || description) ? (
                        <>
                            <Title content={title} size={headingSize} />
                            <Description content={description} size={headingSize} />
                        </>
                    ) : undefined}
                    extra={headerExtra}
                />
                <Body layout={layout} spacing={spacing}>
                    {children}
                </Body>
                <Footer alignFooter={alignFooter} spacing={spacing}>
                    {footer}
                </Footer>
            </Container>
        </Wrapper>
    )
}

const Wrapper = ({
    colorTheme,
    spacing,
    borders,
    id,
    className,
    children
}: {
    colorTheme: Config['colorTheme']
    spacing: Config['spacing']
    borders: Config['borders']

    id?: string
    className?: string
    children?: React.ReactNode
}) => {
    const cls = cn(
        colorTheme === 'primary' && 'bg-body text-typo-body',
        colorTheme === 'secondary' && 'bg-surface text-typo-body',
        colorTheme === 'teritary' && 'bg-surface-2 text-typo-body',

        spacing === "compact" && "py-6 laptop:py-12 space-y-6",
        spacing === "comfortable" && "py-12 laptop:py-20 space-y-8",
        spacing === "large" && "py-20 laptop:py-32 space-y-12",
        spacing === "huge" && "py-32 laptop:py-48 space-y-16",

        borders === "top" && "border-t border-border",
        borders === "bottom" && "border-b border-border",
        borders === "both" && "border-y border-border",

        className
    )
    return (
        <section className={cls} id={id}>
            {children}
        </section>
    )
}

const Title = ({
    size,
    content
}: {
    size?: Config['headingSize'],
    content?: string
}) => {
    if (!content) return null

    switch (size) {
        case "display":
            return <Typography.Display>{content}</Typography.Display>
        case "page":
            return <Typography.H1>{content}</Typography.H1>
        case "section":
            return <Typography.H2>{content}</Typography.H2>
        default:
            return null
    }
}

const Description = ({
    // size,
    content
}: {
    size?: Config['headingSize'],
    content?: string
}) => {
    if (!content) return null

    return <Typography.Body>{content}</Typography.Body>
}

const Header = ({
    heading,
    extra
}: {
    heading?: React.ReactNode
    extra?: React.ReactNode
}) => {
    if (!heading && !extra) return null

    return (
        <div className="flex justify-between items-start">
            {heading && <div className="flex-1 space-y-2">{heading}</div>}
            {extra}
        </div>
    )
}

const Body = ({
    children,
    layout,
    spacing,
}: {
    children?: React.ReactNode
    layout?: Config['layout']
    spacing?: Config['spacing']
}) => {
    if (!children) return null

    const className = cn(
        layout === "stacked" && "flex flex-col",
        layout === "grid" && "grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3",
        layout === "split" && "grid grid-cols-1 tablet:grid-cols-2 items-center",
        layout === "center" && "max-w-3xl mx-auto text-center flex flex-col",

        spacing === 'compact' && 'gap-6',
        spacing === 'comfortable' && 'gap-12',
        spacing === 'large' && 'gap-24',
        spacing === 'huge' && 'gap-48',
    )

    return <div className={className}>{children}</div>
}

const Footer = ({
    children,
    alignFooter,
    spacing,
}: {
    children?: React.ReactNode
    alignFooter?: Config['alignFooter']
    spacing?: Config['spacing']
}) => {
    if (!children) return null

    const className = cn(
        "flex items-center",
        alignFooter === "start" && "justify-start",
        alignFooter === "center" && "justify-center",
        alignFooter === "end" && "justify-end",
        alignFooter === "between" && "justify-between",

        spacing === "compact" && "mt-4",
        spacing === "comfortable" && "mt-8",
        spacing === "large" && "mt-12",
        spacing === "huge" && "mt-16",
    )

    return <div className={className}>{children}</div>
}