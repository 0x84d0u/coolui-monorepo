import { Section } from "../../Section/components-server/Section";
import { cn } from "@coolui/styles";
import React from "react";

export const Sidebar = ({
    children,
    position
}: {
    children?: React.ReactNode
    position?: 'left' | 'right'
}) => {

    if (!children) return null;
    const isLeft = position === 'left'
    const className = cn(
        !isLeft && 'order-1',
        "w-full laptop:w-64",
        "sticky top-0"
    )
    return <Section className={className}>
        {children}
    </Section>


}