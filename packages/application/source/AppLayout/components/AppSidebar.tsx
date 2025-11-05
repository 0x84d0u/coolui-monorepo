import { AppLogo } from "@/Logo/Logo"
import { Body, Footer, Header, Wrapper } from "../lib/sidebar.slots"
import { AppSidebarProps } from "./types"



export const AppSidebar = ({
    sidebarEnabled,
    logoEnabled,
    logoImgUrl,
    logoWordmark,

    isSidebarOpen,

    sidebarHeader,
    sidebarBody,
    sidebarFooter
}: AppSidebarProps) => 
    {
    return <Wrapper
        sidebarEnabled={sidebarEnabled}
        isSidebarOpen={isSidebarOpen || false}
    >
        <Header>
            {logoEnabled && <AppLogo 
                src={logoImgUrl}
                name={logoWordmark}
            />}
            {sidebarHeader}
        </Header>
        <Body>
            {sidebarBody}
        </Body>
        <Footer>
            {sidebarFooter}
        </Footer>
    </Wrapper>
}