import { AppLogo } from "@/Logo/Logo";
import { ActionsWrapper, LogoWrapper, ToolbarWrapper, Wrapper } from "../lib/header.slots";
import { AppHeaderProps } from "./types";
import { AppSidebarToggle } from "../components-client/AppSidebarToggle";
import { ThemeToggle } from "../components-client/ThemeToggle";

export const AppHeader = ({
    logoEnabled,
    logoWordmark,
    logoImgUrl,
    headerEnabled,
    headerFixed,
    headerThemeToggleEnabled,
    sidebarEnabled,

    headerActions,
    headerToolbar,

    isSidebarOpen,
    isHeaderScrolled,
    toggleSidebar,

}: AppHeaderProps) => headerEnabled && <Wrapper
    headerFixed={headerFixed || false}
    showBorder={isSidebarOpen || isHeaderScrolled || false}
>
    <ToolbarWrapper>
        <AppSidebarToggle 
            toggleSidebar={toggleSidebar}
            sidebarEnabled={sidebarEnabled}
        />        

        {headerThemeToggleEnabled && <ThemeToggle />}
        {headerToolbar}
    </ToolbarWrapper>
    <LogoWrapper>
        {logoEnabled && <AppLogo
            name={logoWordmark}
            src={logoImgUrl}
        />}
    </LogoWrapper>
    <ActionsWrapper>
        {headerActions}
    </ActionsWrapper>
</Wrapper>