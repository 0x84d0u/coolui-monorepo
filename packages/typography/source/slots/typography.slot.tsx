
import React from "react"
import { cn, cva, VariantProps } from "@coolui/core";
import { fontFamilyVariants, fontSizeVariants, fontWeightVariants, textAlignVariants } from "@/utils/variants";

const variants = cva("", {
    variants: {
        family: fontFamilyVariants,
        size: fontSizeVariants,
        weight: fontWeightVariants,
        align: textAlignVariants,
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
    uppercase = false,
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
