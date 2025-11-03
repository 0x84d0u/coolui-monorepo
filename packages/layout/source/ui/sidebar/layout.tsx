import * as Root from './root.slot'
import * as Overlay from './overlay.slot'
import * as Area from './area.slot';

export type Props = {
    classNames?: {
        root?: Root.Props['className']
        overlay?: Overlay.Props['className'],
        branding?: Area.Props['className'],
        navigation?: Area.Props['className'],
        cta?: Area.Props['className'],
    }
    children?: {
        branding?: Area.Props['children']
        navigation?: Area.Props['children']
        cta?: Area.Props['children']
    }
    params?: {
        isOpen?: Root.Props['isOpen']
        close?: Overlay.Props['close']
    }
}

export const Slot = ({
    classNames,
    children,
    params,
}: Props) => {
    const rootProps: Root.Props = { isOpen: params?.isOpen, className: classNames?.root }
    const overlayProps: Overlay.Props = { isOpen: params?.isOpen, close: params?.close, className: classNames?.overlay }

    const areaProps: Record<string, Area.Props> = {
        branding: { children: children?.branding, className: classNames?.branding },
        navigation: { children: children?.navigation, className: classNames?.navigation },
        cta: { children: children?.cta, className: classNames?.cta },
    }
    return <>
        <Root.Slot {...rootProps}>
            <Area.Branding {...areaProps.branding} />
            <Area.Navigation {...areaProps.navigation} />
            <Area.Cta {...areaProps.cta} />
        </Root.Slot>
        <Overlay.Slot {...overlayProps} />
    </>
}