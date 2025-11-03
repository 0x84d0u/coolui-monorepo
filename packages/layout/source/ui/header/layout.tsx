import React from "react"

import * as Root from './root.slot'
import * as Container from './container.slot'
import * as Area from './area.slot'

export type Props = {
    classNames?: {
        root?: Root.Props['className'],
        container?: Container.Props['className'],
        toolbar?: Area.Props['className']
        branding?: Area.Props['className']
        actions?: Area.Props['className']
    }
    children?: {
        toolbar?: React.ReactNode
        branding?: React.ReactNode
        actions?: React.ReactNode
    }
    params?: {
        isScrolled?: Root.Props['isScrolled']
        containerSize?: Container.Props['size']
    }
}

export const Slot = ({
    classNames,
    children,
    params,
}: Props) => {

    return <Root.Slot isScrolled={params?.isScrolled} className={classNames?.root}>
        <Container.Slot className={classNames?.container} size={params?.containerSize}>
            <Area.Toolbar className={classNames?.toolbar}>
                {children?.toolbar}
            </Area.Toolbar>
            <Area.Branding className={classNames?.branding}>
                {children?.branding}
            </Area.Branding>
            <Area.Actions className={classNames?.actions}>
                {children?.actions}
            </Area.Actions>
        </Container.Slot>
    </Root.Slot>
}