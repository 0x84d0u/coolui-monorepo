import * as Root from './root.slot'
import * as Overlay from './overlay.slot'
import * as Area from './area.slot';
import { AppLayoutContextProps } from '@/lib/types';

export type AppSidebarProps = {
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
        isOpen?: AppLayoutContextProps['sidebar']['isOpen']
        close?: AppLayoutContextProps['sidebar']['close']
        isLaptop?: AppLayoutContextProps['isLaptop']
    }
}

export const AppSidebar = ({
    classNames,
    children,
    params,
}: AppSidebarProps) => {
    const rootProps: Root.Props = { isOpen: params?.isOpen, isLaptop: params?.isLaptop, className: classNames?.root }
    const overlayProps: Overlay.Props = { isOpen: params?.isOpen, isLaptop: params?.isLaptop, close: params?.close, className: classNames?.overlay }

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