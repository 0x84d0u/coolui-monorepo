import {
    Container,
    mergeSlots,
    Slot,
    type SlotProps,
} from '@coolui/core';
import { cn } from '@coolui/styles';

const Root = (props: SlotProps) => <Slot {...mergeSlots({ className: "relative flex min-h-svh h-full", }, props)} />;
const Content = (props: SlotProps) => <Slot {...mergeSlots({ className: "min-h-svh flex-1 flex flex-col", }, props)} />;
const Main = (props: SlotProps<'main'>) => <Slot as='main' {...mergeSlots({ className: "flex-1 overflow-y-auto", }, props)} />;


const Footer = (props: SlotProps<'footer'>) => <Slot as='footer' {...mergeSlots({ }, props)} />;

const Overlay = Slot
const SidebarWrapper = (props: SlotProps<'aside'>) => <Slot as='aside' {...mergeSlots({
    className: cn(
        "bg-(--cool-sidebar-bg) text-(--cool-sidebar-color)",
        "border-r border-border",
        "flex flex-col",
        // Full height on laptop
        "h-(--cool-sidebar-height) min-h-(--cool-sidebar-height) laptop:h-svh laptop:min-h-svh",
        // Full width on mobile
        "w-full tablet:w-64",
        // Fixed on mobile/tablet, Static on laptop
        "fixed inset-y-0 left-0 top-(--cool-header-height) z-30",
        "laptop:shrink-0",
        // Sticky on laptop
        "laptop:sticky laptop:top-0",
        // Slide animation
        "transition-transform duration-300 ease-in-out",
    )
}, props)} />;

const HeaderWrapper = (props: SlotProps<'header'>) => <Slot as='header' {...mergeSlots({
    className: cn(
        "bg-(--cool-header-bg) text-(--cool-header-color)",
        "border-b transition-colors duration-200",
    ),
}, props)} />;

const HeaderToolbar = (props: SlotProps) => <Slot {...mergeSlots({ className: "flex items-center gap-3", }, props)} />;
const HeaderLogo = (props: SlotProps) => <Slot {...mergeSlots({ className: "flex items-center justify-self-center", }, props)} />;
const HeaderActions = (props: SlotProps) => <Slot {...mergeSlots({ className: "flex items-center justify-end gap-2", }, props)} />;

const SidebarLogo = Slot
const SidebarHeader = Slot
const SidebarToolbar = Slot
const SidebarNavigation = Slot
const SidebarFooter = Slot


export interface LayoutProps {
    root?: SlotProps
    overlay?: SlotProps
    content?: SlotProps
    main?: SlotProps<'main'>
    footer?: SlotProps<'footer'>

    headerWrapper?: SlotProps<'header'>
    headerToolbar?: SlotProps
    headerLogo?: SlotProps
    headerActions?: SlotProps

    sidebarWrapper?: SlotProps<'aside'>
    sidebarLogo?: SlotProps
    sidebarHeader?: SlotProps
    sidebarToolbar?: SlotProps
    sidebarNavigation?: SlotProps
    sidebarFooter?: SlotProps

}


export const Layout = ({
    root,
    overlay,
    content,
    main,
    footer,
    headerWrapper,
    headerToolbar,
    headerActions,
    headerLogo,
    sidebarWrapper,
    sidebarLogo,
    sidebarHeader,
    sidebarToolbar,
    sidebarNavigation,
    sidebarFooter
}: LayoutProps) => {

    return <Root {...root}>

        <SidebarWrapper {...sidebarWrapper}>
            <SidebarLogo {...mergeSlots({}, sidebarLogo)} />
            <SidebarHeader {...mergeSlots({}, sidebarHeader)} />
            <SidebarToolbar {...mergeSlots({}, sidebarToolbar)} />
            <SidebarNavigation {...mergeSlots({}, sidebarNavigation)} />
            <SidebarFooter {...mergeSlots({}, sidebarFooter)} />
        </SidebarWrapper>

        <Overlay {...mergeSlots({}, overlay)} />

        <Content {...content}>

            <HeaderWrapper {...headerWrapper}>
                <Container className='grid grid-cols-3 items-center h-(--cool-header-height)'>
                    <HeaderToolbar {...headerToolbar} />
                    <HeaderLogo {...headerLogo} />
                    <HeaderActions {...headerActions} />
                </Container>
            </HeaderWrapper>

            <Main {...main} />

            <Footer {...footer} />

        </Content>
    </Root>
}


