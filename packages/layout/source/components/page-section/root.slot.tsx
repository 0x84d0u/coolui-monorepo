import { cn, cva, VariantProps } from "@coolui/styles";
import React from "react";

const variants = cva("", {
    variants: {
        theme: {
            body: "bg-body text-typo-body",
            surface: "bg-surface text-typo-surface",
            accent: "bg-accent text-typo-accent",
        },
        spacing: {
            compact: "py-6 laptop:py-12 space-y-6",
            comfortable: "py-12 laptop:py-20 space-y-8",
            large: "py-20 laptop:py-32 space-y-12",
            huge: "py-32 laptop:py-48 space-y-16",
        },
        height: {
            full: "h-full",
        },
        border: {
            top: "border-t border-subtle",
            bottom: "border-b border-subtle",
            both: "border-y border-subtle",
        }
    }
})

export type Props = VariantProps<typeof variants> & {
    className?: string;
    children?: React.ReactNode
}

export const Slot = ({
    height,
    spacing,
    theme,
    border,

    className,
    children
}: Props) => <section
    className={cn(
        variants({ height, spacing, theme, border }),
        className
    )}
>
        {children}
    </section>