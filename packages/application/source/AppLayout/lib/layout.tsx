import {
    Container,
    mergeSlots,
    Slot,
    type SlotProps,
} from '@coolui/core';
import { cn } from '@coolui/styles';

// ============================================================================
// Root & Main Structure
// ============================================================================

const Root = (props: SlotProps) => <Slot {...mergeSlots({ 
    className: cn(
        "relative flex min-h-svh",
        // Smooth theme transitions
        "transition-colors duration-200",
        // Print optimization
        "print:block print:min-h-0",
    ),
}, props)} />;

const Content = (props: SlotProps) => <Slot {...mergeSlots({ 
    className: cn(
        "min-h-svh flex-1 flex flex-col",
        // Ensure content takes remaining space
        "w-full",
    ),
}, props)} />;

const Main = (props: SlotProps<'main'>) => <Slot as='main' {...mergeSlots({ 
    className: cn(
        // Flex grow and scroll
        "flex-1",
        // Better scroll behavior
        "overflow-y-auto overflow-x-hidden",
        // Smooth scroll on supported browsers
        "scroll-smooth",
        // Focus outline for accessibility
        "focus-visible:outline-none",
    ),
}, props)} />;

const Footer = (props: SlotProps<'footer'>) => <Slot as='footer' {...mergeSlots({ 
    className: cn(
        "bg-(--cool-footer-bg) text-(--cool-footer-color)",
        "border-t border-border",
        // Prevent shrinking
        "shrink-0",
        // Print hide
        "print:hidden",
    ),
}, props)} />;

// ============================================================================
// Overlay
// ============================================================================

const Overlay = (props: SlotProps) => <Slot {...mergeSlots({ 
    className: cn(
        // Positioning
        "fixed inset-0 z-20",
        // Styling
        // "bg-white dark:bg-black backdrop-blur-sm",
        // Animation
        "transition-opacity duration-300",
        // Hide on laptop and up
        "laptop:hidden",
        // Print hide
        "print:hidden",
    ),
}, props)} />;

// ============================================================================
// Sidebar
// ============================================================================

const SidebarWrapper = (props: SlotProps<'aside'>) => <Slot as='aside' {...mergeSlots({
    className: cn(
        // Theme colors
        "bg-(--cool-sidebar-bg) text-(--cool-sidebar-color)",
        // Border
        "border-r border-border",
        // Layout
        "flex flex-col",
        
        // Height management
        // Mobile/Tablet: Full viewport height minus header
        "h-[calc(100svh-var(--cool-header-height))] min-h-[calc(100svh-var(--cool-header-height))]",
        // Laptop+: Full screen height
        "laptop:h-svh laptop:min-h-svh",
        
        // Width
        "w-[280px] mobile:w-[320px] tablet:w-[280px]",
        
        // Positioning
        // Mobile/Tablet: Fixed overlay
        "fixed inset-y-0 left-0 top-(--cool-header-height) z-30",
        // Laptop+: Static in flow, with sticky positioning
        "laptop:static laptop:sticky laptop:top-0 laptop:shrink-0",
        
        // Slide animation
        "transition-transform duration-300 ease-out",
        
        // Shadow on mobile when open
        "shadow-2xl laptop:shadow-none",
        
        // Print hide
        "print:hidden",
        
        // Focus management
        "focus-visible:outline-none",
        
        // Scrollable content
        "overflow-y-auto overflow-x-hidden",
        
        // Smooth scroll
        "scroll-smooth",
    )
}, props)} />;

const SidebarLogo = (props: SlotProps) => <Slot {...mergeSlots({
    className: cn(
        "shrink-0",
        "px-6 py-4",
        "border-b border-border",
    ),
}, props)} />;

const SidebarHeader = (props: SlotProps) => <Slot {...mergeSlots({
    className: cn(
        "shrink-0",
        "px-6 py-4",
        "border-b border-border",
    ),
}, props)} />;

const SidebarToolbar = (props: SlotProps) => <Slot {...mergeSlots({
    className: cn(
        "shrink-0",
        "px-4 py-3",
    ),
}, props)} />;

const SidebarNavigation = (props: SlotProps) => <Slot {...mergeSlots({
    className: cn(
        // Grow to take available space
        "flex-1",
        "overflow-y-auto overflow-x-hidden",
        // Padding
        "px-3 py-4",
        // Custom scrollbar
        "scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700",
    ),
}, props)} />;

const SidebarFooter = (props: SlotProps) => <Slot {...mergeSlots({
    className: cn(
        "shrink-0",
        "px-6 py-4",
        "border-t border-border",
        "mt-auto", // Push to bottom
    ),
}, props)} />;

// ============================================================================
// Header
// ============================================================================

const HeaderWrapper = (props: SlotProps<'header'>) => <Slot as='header' {...mergeSlots({
    className: cn(
        // Theme colors
        "bg-(--cool-header-bg) text-(--cool-header-color)",
        // Border with smooth transition
        "border-b transition-colors duration-200",
        // Prevent shrinking
        "shrink-0",
        // Print modifications
        "print:static print:border-b-2",
    ),
}, props)} />;

const HeaderContainer = (props: SlotProps) => <Container {...mergeSlots({
    className: cn(
        // Grid layout
        "grid grid-cols-[1fr_auto_1fr] items-center gap-4",
        // Height
        "h-(--cool-header-height) min-h-(--cool-header-height)",
        // Responsive padding
        "px-4 mobile:px-6",
    ),
}, props)} />;

const HeaderToolbar = (props: SlotProps) => <Slot {...mergeSlots({ 
    className: cn(
        "flex items-center gap-3",
        // Justify start
        "justify-start",
    ),
}, props)} />;

const HeaderLogo = (props: SlotProps) => <Slot {...mergeSlots({ 
    className: cn(
        "flex items-center justify-center",
        // Prevent shrinking
        "shrink-0",
    ),
}, props)} />;

const HeaderActions = (props: SlotProps) => <Slot {...mergeSlots({ 
    className: cn(
        "flex items-center gap-2",
        // Justify end
        "justify-end",
    ),
}, props)} />;

// ============================================================================
// Types
// ============================================================================

export interface LayoutProps {
    root?: SlotProps
    overlay?: SlotProps
    content?: SlotProps
    main?: SlotProps<'main'>
    footer?: SlotProps<'footer'>

    headerWrapper?: SlotProps<'header'>
    headerContainer?: SlotProps
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

// ============================================================================
// Layout Component
// ============================================================================

export const Layout = ({
    root,
    overlay,
    content,
    main,
    footer,
    headerWrapper,
    headerContainer,
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
            <SidebarLogo {...sidebarLogo} />
            <SidebarHeader {...sidebarHeader} />
            <SidebarToolbar {...sidebarToolbar} />
            <SidebarNavigation {...sidebarNavigation} />
            <SidebarFooter {...sidebarFooter} />
        </SidebarWrapper>

        <Overlay {...overlay} />

        <Content {...content}>

            <HeaderWrapper {...headerWrapper}>
                <HeaderContainer {...headerContainer}>
                    <HeaderToolbar {...headerToolbar} />
                    <HeaderLogo {...headerLogo} />
                    <HeaderActions {...headerActions} />
                </HeaderContainer>
            </HeaderWrapper>

            <Main {...main} />

            <Footer {...footer} />

        </Content>
    </Root>
}