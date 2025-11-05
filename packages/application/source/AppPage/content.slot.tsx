import React from "react";
import { cn, cva, VariantProps } from "@coolui/styles";

export const variants = cva("", {
    variants: {
        spacing: {
            compact: "",
            comfortable: "",
            large: "",
            huge: "",
        },
        layout: {
            stacked: "flex flex-col",
            grid: "grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3",
            split: "grid grid-cols-1 tablet:grid-cols-2 items-center",
            center: "max-w-3xl mx-auto text-center flex flex-col",
        }
    },
    compoundVariants: [
        { spacing: "compact", layout: "stacked", className: "gap-6" },
        { spacing: "compact", layout: "grid", className: "gap-x-6 gap-y-8" },
        { spacing: "compact", layout: "split", className: "gap-8" },
        { spacing: "compact", layout: "center", className: "gap-6" },

        { spacing: "comfortable", layout: "stacked", className: "gap-8" },
        { spacing: "comfortable", layout: "grid", className: "gap-x-8 gap-y-10" },
        { spacing: "comfortable", layout: "split", className: "gap-12" },
        { spacing: "comfortable", layout: "center", className: "gap-10" },

        { spacing: "large", layout: "stacked", className: "gap-12" },
        { spacing: "large", layout: "grid", className: "gap-x-12 gap-y-16" },
        { spacing: "large", layout: "split", className: "gap-16" },
        { spacing: "large", layout: "center", className: "gap-14" },

        { spacing: "huge", layout: "stacked", className: "gap-16" },
        { spacing: "huge", layout: "grid", className: "gap-x-16 gap-y-20" },
        { spacing: "huge", layout: "split", className: "gap-20" },
        { spacing: "huge", layout: "center", className: "gap-20" },

    ]
})


export type Props = VariantProps<typeof variants> & {
    children?: React.ReactNode,
    className?: string
}


export const Slot = ({
    layout,
    spacing,
    className,
    ...props
}: Props) => {

    return <div
        className={cn(
            variants({ layout, spacing }),
            className
        )}
        {...props}
    />
}