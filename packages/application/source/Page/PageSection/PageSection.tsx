import { cn } from "@coolui/styles"
import { Typography } from "@coolui/typography"
import { ChildrenComponent, Container } from "@coolui/core"
import { SectionConfig } from "../types"


export const PageSection = ({
    colorTheme = 'primary',
    spacing = 'comfortable',
    borders,
    containerSize = 'lg',
    headingSize = 'section',
    layout = 'stacked',
    alignFooter = 'start',

    id,
    // className,

    title,
    description,
    headerContent,
    children,
    footerContent,
}: SectionConfig) => {
    return (
        <Root
            id={id}
            colorTheme={colorTheme}
            borders={borders}
            spacing={spacing}
        >
            <Container size={containerSize}>
                <Header visible={!!(title || description || headerContent)}>
                    <HeaderHeading visible={!!(title || description)}>
                        <Title size={headingSize}>{title}</Title>
                        <Description size={headingSize}>{description}</Description>
                    </HeaderHeading>
                    <HeaderExtra visible={!!headerContent}>{headerContent}</HeaderExtra>
                </Header>
                <Body
                    spacing={spacing}
                    layout={layout}
                >
                    {children}
                </Body>
                <Footer
                    spacing={spacing}
                    alignFooter={alignFooter}
                >
                    {footerContent}
                </Footer>
            </Container>
        </Root>
    )
}

PageSection.displayName = "PageSection"


const Root = (props: ChildrenComponent & {
    id?: string,
    colorTheme?: SectionConfig['colorTheme']
    spacing?: SectionConfig['spacing']
    borders?: SectionConfig['borders']

}) => <section
    id={props.id}
    aria-labelledby={props.id ? `${props.id}-heading` : undefined}
    className={cn(
        props.colorTheme === 'primary' && 'bg-body text-typo-body',
        props.colorTheme === 'secondary' && 'bg-surface text-typo-body',
        props.colorTheme === 'teritary' && 'bg-surface-2 text-typo-body',
        props.spacing === "compact" && "py-8 laptop:py-12",
        props.spacing === "comfortable" && "py-12 laptop:py-20",
        props.spacing === "large" && "py-20 laptop:py-32",
        props.spacing === "huge" && "py-32 laptop:py-48",
        props.borders === "top" && "border-t border-border",
        props.borders === "bottom" && "border-b border-border",
        props.borders === "both" && "border-y border-border",

        // Transition
        "transition-colors duration-250",
    )} >
        {props.children}
    </section>

const Header = (props: ChildrenComponent & { visible?: boolean }) => props.visible && <div className={cn(
    "flex flex-col tablet:flex-row tablet:justify-between tablet:items-start gap-6",
    "mb-8 laptop:mb-12",
)}>
    {props.children}
</div>
const HeaderHeading = (props: ChildrenComponent & { visible?: boolean }) => props.visible && <div className="flex-1 space-y-2">
    {props.children}
</div>

const HeaderExtra = (props: ChildrenComponent & { visible?: boolean }) => props.visible && <div className="shrink-0">
    {props.children}
</div>


const Title = (props: { children?: string, size?: SectionConfig['headingSize'] }) => {
    if (!props.children) return null

    // TODO: Append id
    // const id = props.children.toLowerCase().replace(/\s+/g, '-')

    switch (props.size) {
        case "display":
            return <Typography.Display>{props.children as string}</Typography.Display>
        case "page":
            return <Typography.H1>{props.children as string}</Typography.H1>
        case "section":
            return <Typography.H2>{props.children as string}</Typography.H2>
        default:
            return null
    }
}


const Description = (props: { children?: string, size?: SectionConfig['headingSize'] }) => {
    if (!props.children) return null
    return <Typography.Body className="text-typo-muted max-w-3xl">
        {props.children}
    </Typography.Body>
}



const Body = (props: ChildrenComponent & {
    layout?: SectionConfig['layout']
    spacing?: SectionConfig['spacing']
}) => {
    if (!props.children) return null
    return <div className={cn(
        props.layout === "stacked" && "flex flex-col",
        props.layout === "grid" && "grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3",
        props.layout === "split" && "grid grid-cols-1 tablet:grid-cols-2 items-center",
        props.layout === "center" && "max-w-3xl mx-auto text-center flex flex-col",

        props.spacing === 'compact' && 'gap-6',
        props.spacing === 'comfortable' && 'gap-8',
        props.spacing === 'large' && 'gap-12',
        props.spacing === 'huge' && 'gap-16',
    )}>{props.children}</div>
}

const Footer = (props: ChildrenComponent & {
    alignFooter?: SectionConfig['alignFooter']
    spacing?: SectionConfig['spacing']
}) => {
    if (!props.children) return null
    return <div className={cn(
        "flex items-center flex-wrap gap-4",
        props.alignFooter === "start" && "justify-start",
        props.alignFooter === "center" && "justify-center",
        props.alignFooter === "end" && "justify-end",
        props.alignFooter === "between" && "justify-between",
        props.spacing === "compact" && "mt-6",
        props.spacing === "comfortable" && "mt-8",
        props.spacing === "large" && "mt-12",
        props.spacing === "huge" && "mt-16",
    )}>{props.children}</div>
}
