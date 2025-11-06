import { NavItem, NavItemProps } from "./NavItem"

export type NavItemType = {
    label?: string
    icon?: React.ReactNode
    renderToggle?: (isOpen: boolean) => React.ReactNode
    defaultOpen?: boolean
    items?: NavItemType[]
}

export type NavProps = {
    items?: NavItemType[]
    itemProps?: NavItemProps
    indent?: number
}

export const Nav = ({
    items,
    itemProps: globalItemProps,
    indent,
}: NavProps) => {
    if (!items || items.length < 1) return null;
    return <Wrapper>
        {items.map((itemProps, i) => <NavItem
            indent={indent}
            key={i}
            {...globalItemProps}
            {...itemProps}
            level={0}
        />)}
    </Wrapper>
}

const Wrapper = ({ children }: {
    children: React.ReactNode
}) => <nav className="w-full"> {children} </nav>
