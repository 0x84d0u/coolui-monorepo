import { cn } from "@coolui/styles";

import { Section } from "@/server";

import { Config, Content } from "./types";

export const Wrapper = (props: {
    enabled?: Config['enableSidebar']
    position?: Config['sidebarPosition']
    children?: Content['sidebar']
}) => {
    if(!props.enabled) return null;
    const isLeft = props.position === 'left'
    const className = cn(
            !isLeft && 'order-1',
            "w-full laptop:w-64",
            "sticky top-0"
        )
    return <Section className={className}>
        {props.children}
    </Section>
}
