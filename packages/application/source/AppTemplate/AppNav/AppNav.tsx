import { NavigationConfig } from "../types"
import { AppNavItem } from "./AppNavItem.client"

export type AppNavProps = {
    indent?: number
} & NavigationConfig

export const AppNav = ({
    navEnabled = true,
    navItems,
    navItemProps,
    indent,
}: AppNavProps) => {
    if (!navEnabled) return null;
    if (!navItems || navItems.length < 1) return null;
    return <Wrapper>
        {navItems.map((itemProps, i) => <AppNavItem
            indent={indent}
            key={i}
            {...navItemProps}
            {...itemProps}
            level={0}
        />)}
    </Wrapper>
}

const Wrapper = ({ children }: {
    children: React.ReactNode
}) => <nav className="w-full"> {children} </nav>
