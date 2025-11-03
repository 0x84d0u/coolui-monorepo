import { ReactNode } from "react";
import { cn, Flex } from "@coolui/core";
import { Container } from "@/components/Container";
import { LogoProps } from "@/components/Logo";
import { SidebarToggle } from "@/components/SidebarToggle";

export type Props = {
    className?: {
        root?: string,
        container?: string,
        sidebarToggle?: string
        themeToggle?: string
        logo?: string
    }
    isScrolled?: boolean
    logo?: LogoProps
    children?: ReactNode
}

export const Slot = ({
    className,
    isScrolled,
    // logo,
    children,
}: Props) => {


    return <header
        className={cn(
            "sticky top-0 z-30 border-b",
            "bg-body/80 text-typo-body",
            "supports-backdrop-filter:backdrop-blur-md",
            "transition-colors",
            isScrolled ? "border-subtle/80" : "border-transparent",
            className
        )}
    >
        <Container className={cn("grid grid-cols-3 items-center h-16", className?.container)}>
            <Flex direction='row'>
                <SidebarToggle />
                {/* <ThemeToggle /> */}
                ...
            </Flex>
            <div className="justify-self-center">
                {/* <Logo {...logo} /> */}
            </div>
            <Flex direction='row' className="justify-end">
                {children}
            </Flex>
        </Container>
    </header>
};