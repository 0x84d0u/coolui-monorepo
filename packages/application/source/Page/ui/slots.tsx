import { cn } from "@coolui/styles"
import { SectionContent, SectionOptions } from "./types"
import { Typography } from "@coolui/typography"

export const SectionWrapper = (props: { children: React.ReactNode } & Pick<SectionOptions, 'colorTheme' | 'spacing' | 'borders'>) => {
    const className = cn(
        props.colorTheme === 'primary' && 'bg-body text-typo-body',
        props.colorTheme === 'secondary' && 'bg-surface text-typo-body',
        props.colorTheme === 'teritary' && 'bg-surface-2 text-typo-body',

        props.spacing === "compact" && "py-6 laptop:py-12 space-y-6",
        props.spacing === "comfortable" && "py-12 laptop:py-20 space-y-8",
        props.spacing === "large" && "py-20 laptop:py-32 space-y-12",
        props.spacing === "huge" && "py-32 laptop:py-48 space-y-16",

        props.borders === "top" && "border-t border-border",
        props.borders === "bottom" && "border-b border-border",
        props.borders === "both" && "border-y border-border",
    )
    return <section className={className}>
        {props.children}
    </section>
}


export const SectionHeader = (props: Pick<SectionContent, 'title' | 'subtitle' | 'headerActions'> & Pick<SectionOptions, 'headingSize' | 'spacing'>) => {
    if (!props.title && !props.subtitle && !props.headerActions) return null;

    const Title = () => {
        if (!props.title) return null;
        switch (props.headingSize) {
            // TODO: create typography PageTitle and SectionTitle
            case "display": return <Typography.Display>{props.title}</Typography.Display>
            case "page": return <Typography.H1>{props.title}</Typography.H1>
            case "section": return <Typography.H2>{props.title}</Typography.H2>
            default: return null
        }
    }

    const Subtitle = () => {
        if (!props.subtitle) return null;
        switch (props.headingSize) {
            case "display": return <Typography.Body>{props.subtitle}</Typography.Body>
            case "page": return <Typography.Body>{props.subtitle}</Typography.Body>
            case "section": return <Typography.Body>{props.subtitle}</Typography.Body>
            default: return null
        }
    }

    const showHeading = !props.title && !props.subtitle

    return <div className="flex justify-between">
        {showHeading && <div className="flex-1">
            <Title />
            <Subtitle />
        </div>}
        {props.headerActions}
    </div>
}
export const SectionBody = (props: { children: React.ReactNode } & Pick<SectionOptions, 'layout' | 'spacing'>) => {
    if (!props.children) return null;
    const className = cn(
        props.layout === "stacked" && "flex flex-col",
        props.layout === "grid" && "grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3",
        props.layout === "split" && "grid grid-cols-1 tablet:grid-cols-2 items-center",
        props.layout === "center" && "max-w-3xl mx-auto text-center flex flex-col",

        props.spacing === 'compact' && 'gap-6',
        props.spacing === 'comfortable' && 'gap-12',
        props.spacing === 'large' && 'gap-24',
        props.spacing === 'huge' && 'gap-48',
    )
    return <div className={className}>{props.children}</div>
}

export const SectionFooter = (props: { children: React.ReactNode } & Pick<SectionOptions, 'alignFooter' | 'spacing'>) => {
    if (!props.children) return null;
    const className = cn(
        "flex items-center",
        props.alignFooter === "start" && "justify-start",
        props.alignFooter === "center" && "justify-center",
        props.alignFooter === "end" && "justify-end",
        props.alignFooter === "between" && "justify-between",

        props.spacing === "compact" && "mt-4",
        props.spacing === "comfortable" && "mt-8",
        props.spacing === "large" && "mt-12",
        props.spacing === "huge" && "",
    )
    return <div className={className}>{props.children} </div>
}
