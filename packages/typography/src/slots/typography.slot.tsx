import React from "react"
import { cva, cn, type VariantProps } from "@coolui/core"

const variants = cva("text-body font-body text-body-fg", {
    variants: {
        family: {
            inherit: "font-[inherit]",
            body: "font-body",
            code: "font-code",
            display: "font-display",
        },
        size: {
            inherit: "text-[inherit] leading-[inherit]",
            logo: "text-xl tracking-tight",
            display: "text-5xl leading-tight tracking-tightest",
            h1: "text-4xl leading-snug tracking-tighter",
            h2: "text-3xl leading-snug tracking-tight",
            h3: "text-2xl leading-normal",
            h4: "text-xl leading-normal",
            h5: "text-lg leading-normal",
            h6: "text-base leading-normal tracking-wide",
            base: "text-base leading-relaxed",
            sm: "text-sm leading-normal",
            xs: "text-xs leading-normal tracking-wider",
        },
        weight: {
            light: "font-light",
            regular: "font-regular",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
            justify: "text-justify",
        },
        uppercase: {
            true: "uppercase"
        }
    },
})

export type OwnProps = VariantProps<typeof variants> & {
    tagname?: "p" | "span" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}
export type Props = OwnProps & {
    className?: string
    children?: string
};


export const Slot = ({
    family,
    size,
    weight,
    align,
    uppercase,
    tagname = 'p',
    className,
    ...props
}: Props) => {
    const Comp = tagname as React.ElementType
    return <Comp
        className={cn(
            "",
            variants({ size, weight, align, family, uppercase }),
            className
        )}
        {...props}
    />
}
