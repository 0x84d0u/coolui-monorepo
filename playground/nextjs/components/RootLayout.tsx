import { THEME_CONFIG } from "@/components/config";
import { ThemeScript } from "@coolui/application";
import { Application } from "@coolui/application/client";
import { ChildrenComponent } from "@coolui/core";

export const RootScript = () => <ThemeScript config={THEME_CONFIG} />

const navItems = [
    { label: "Homepage" },
    {
        label: "Link with children", items: [
            { label: "First child " },
            { label: "Second child " },
            { label: "Third child " },

        ]
    }
]

const content = <div> Content </div>

export const RootLayout = ({ children }: ChildrenComponent) => <Application
    themeConfig={THEME_CONFIG}
    templateProps={{
        headerEnabled: true,
        headerFixed: true,
        // headerActionsContent: content,
        // headerToolbarContent: content,

        sidebarEnabled: true,
        sidebarPosition: 'left',
        // sidebarHeaderContent: content,
        // sidebarBodyContent: content,
        // sidebarFooterContent: content,

        logoEnabled: true,
        logoPosition: 'both',
        logoWordmark: "VertiGo",

        navEnabled: true,
        navItems: navItems,


        children: children
    }}
/>
