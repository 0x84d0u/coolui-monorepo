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
    className,
    
    title,
    description,
    headerContent,
    children,
    footerContent,
}: SectionConfig) => {
    return (
        <Root
            id={id}
            className={cn(
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
                className,
            )}
        >
            <Container size={containerSize}>
                <Header visible={!!(title || description || headerContent)}>
                    <HeaderHeading visible={!!(title || description)}>
                        <Title size={headingSize}>{title}</Title>
                        <Description size={headingSize}>{description}</Description>
                    </HeaderHeading>
                    <HeaderExtra visible={!!headerContent}>{headerContent}</HeaderExtra>
                </Header>
                <Body className={cn(
                    layout === "stacked" && "flex flex-col",
                    layout === "grid" && "grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3",
                    layout === "split" && "grid grid-cols-1 tablet:grid-cols-2 items-center",
                    layout === "center" && "max-w-3xl mx-auto text-center flex flex-col",

                    spacing === 'compact' && 'gap-6',
                    spacing === 'comfortable' && 'gap-12',
                    spacing === 'large' && 'gap-24',
                    spacing === 'huge' && 'gap-48',
                )}>
                    {children}
                </Body>
                <Footer className={cn(
                    "flex items-center",
                    alignFooter === "start" && "justify-start",
                    alignFooter === "center" && "justify-center",
                    alignFooter === "end" && "justify-end",
                    alignFooter === "between" && "justify-between",

                    spacing === "compact" && "mt-4",
                    spacing === "comfortable" && "mt-8",
                    spacing === "large" && "mt-12",
                    spacing === "huge" && "mt-16",
                )}>
                    {footerContent}
                </Footer>
            </Container>
        </Root>
    )
}

PageSection.displayName = "PageSection"


const Root = (props: ChildrenComponent & { id?: string, className?: string }) => <section className={props.className} id={props.id}>
    {props.children}
</section>

const Header = (props: ChildrenComponent & { visible?: boolean }) => props.visible && <div className="flex justify-between items-start"> {props.children} </div>
const HeaderHeading = (props: ChildrenComponent & { visible?: boolean }) => props.visible && <div className="flex-1"> {props.children} </div>
const HeaderExtra = (props: ChildrenComponent & { visible?: boolean }) => props.visible && <div className=""> {props.children} </div>


const Title = (props: { children?: string, size?: SectionConfig['headingSize'] }) => {
    if (!props.children) return null
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
    return <Typography.Body>{props.children}</Typography.Body>
}



const Body = (props: ChildrenComponent & { className?: string }) => {
    if (!props.children) return null
    return <div className={props.className}>{props.children}</div>
}

const Footer = (props: ChildrenComponent & { className?: string }) => {
    if (!props.children) return null
    return <div className={props.className}>{props.children}</div>
}
