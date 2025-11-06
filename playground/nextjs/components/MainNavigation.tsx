import { Nav, type NavItemType } from "@coolui/application/client"

const data: NavItemType[] = [
    { label: "Homepage" },
    {
        label: "Link with children", items: [
            { label: "First child " },
            { label: "Second child " },
            { label: "Third child " },

        ]
    }
]

export const MainNavigation = () => {
    return <Nav 
        items={data}
    />
}