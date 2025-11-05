import { cn } from "@coolui/styles"
import { Config, State } from "./types"
import { Flex } from "@coolui/core"

export const Wrapper = (props: Pick<State, 'isSidebarOpen'> & Pick<Config, 'sidebarEnabled'> & { children?: React.ReactNode }) => {
    if (!props.sidebarEnabled) return null;
    return <aside
        className={cn(
            "bg-(--cool-sidebar-bg) text-(--cool-sidebar-color)",
            "border-r border-border",
            "flex flex-col",
            // Full height on laptop
            "h-(--cool-sidebar-height) min-h-(--cool-sidebar-height) laptop:h-svh laptop:min-h-svh",
            // Full width on mobile
            "w-full tablet:w-64",
            // Fixed on mobile/tablet, Static on laptop
            "fixed inset-y-0 left-0 top-(--cool-header-height) z-30",
            // Sticky on laptop
            "laptop:sticky laptop:top-0",
            // Slide animation
            "transition-transform duration-300 ease-in-out",
            props.isSidebarOpen ? 'translate-x-0' : '-translate-x-full laptop:translate-x-0',
            "laptop:shrink-0",
        )}
    >
        {props.children}
    </aside>
}

export const Header = (props: { children: React.ReactNode }) => <Flex direction='column' className={cn("tablet:flex p-6 border-b border-border")}>{props.children}</Flex>
export const Body = (props: { children?: React.ReactNode }) => <Flex direction='column' className={cn("p-6 flex-1 overflow-y-auto",)}>
    {props.children}
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore error, sapiente quas odio animi, tenetur harum facere quidem, eius consequatur ipsa amet voluptatem libero. Officia deleniti autem debitis tempore totam?
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore error, sapiente quas odio animi, tenetur harum facere quidem, eius consequatur ipsa amet voluptatem libero. Officia deleniti autem debitis tempore totam?
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore error, sapiente quas odio animi, tenetur harum facere quidem, eius consequatur ipsa amet voluptatem libero. Officia deleniti autem debitis tempore totam?
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore error, sapiente quas odio animi, tenetur harum facere quidem, eius consequatur ipsa amet voluptatem libero. Officia deleniti autem debitis tempore totam?
</Flex>

export const Footer = (props: { children?: React.ReactNode }) => <Flex direction='column' className={cn("p-6 border-t border-border")}>{props.children}</Flex>

