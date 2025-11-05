import { AppLogo } from "@/Logo/Logo";
import { ActionsWrapper, LogoWrapper, ToolbarWrapper, Wrapper } from "../lib/header.slots";
import { AppHeaderProps } from "./types";

export const AppHeader = ({
    logoEnabled,
    logoWordmark,
    logoImgUrl,
    headerEnabled,
    headerFixed,

    headerToolbar,
    headerActions,

    isSidebarOpen,
    isHeaderScrolled,

}: AppHeaderProps) => headerEnabled && <Wrapper
    headerFixed={headerFixed || false}
    showBorder={isSidebarOpen || isHeaderScrolled || false}
>
    <ToolbarWrapper>
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