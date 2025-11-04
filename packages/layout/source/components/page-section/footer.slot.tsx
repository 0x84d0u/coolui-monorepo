import React from "react";
import { cn, cva, VariantProps } from "@coolui/styles";

export const variants = cva("", {
    variants: {
        align: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
        },
        spacing: {
            compact: "mt-4",
            comfortable: "mt-8",
            large: "mt-12",
            huge: "",
        },
    },
})

export type OwnProps = VariantProps<typeof variants>;

export type Props = OwnProps & {
    children?: React.ReactNode,
    className?: string
}


export const Slot = ({
    align,
    spacing,
    className,
    ...props
}: Props) => {

    return <div
        className={cn(
            "flex items-center",
            variants({ align, spacing }),
            className
        )}
        {...props}
    />
}