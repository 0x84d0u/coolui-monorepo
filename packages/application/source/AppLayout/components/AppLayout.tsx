import { Overlay } from "@coolui/core"
import { Main, SidebarOff, Wrapper } from "../lib/root.slots"
import { AppSidebar } from "./AppSidebar"
import { AppHeader } from "./AppHeader"
import { AppLayoutProps } from "./types"


export const AppLayout = ({ children, ...props }: AppLayoutProps) => {

    return <Wrapper>
        <AppSidebar {...props} />
        <Overlay isOpen={props.isSidebarOpen} onClick={props.closeSidebar} />
        <SidebarOff>
            <AppHeader {...props} />
            <Main>
                {children}
            </Main>
            <footer> footer </footer>
        </SidebarOff>
    </Wrapper>
}