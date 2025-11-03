import React from "react";
import { cn } from "@coolui/core";

export type OwnProps = {
    asBody?: boolean
};

export type Props = OwnProps & {
    children?: React.ReactNode
    className?: string
}

export const Slot = ({
    className,
    asBody = false,
    ...props
}: Props) => {
    const Comp: React.ElementType = asBody ? 'body' : 'div';
    return <Comp
        className={cn(
            "relative flex min-h-screen h-full",
            className
        )}
        {...props}
    />

}
