"use client";

import { Template as ServerTemplate, type TemplateProps as ServerTemplateProps } from "../components-server/Template";
import { ToggleSidebar } from "./ToggleSidebar";
import { Provider } from "./Provider";
import { ToggleTheme } from "./ToggleTheme";
import { useTemplate } from "../lib/useTemplate";


const Hooked = ({
    config,
    state: customState,
    headerToolbar,
    ...rest
}: ServerTemplateProps) => {
    const state = useTemplate();
    return <ServerTemplate
        headerToolbar={<>
            {config?.sidebarEnabled && <ToggleSidebar />}
            {config?.headerThemeToggleEnabled && <ToggleTheme />}
            {headerToolbar}
        </>}
        config={config}
        state={state || customState}
        {...rest}
    />
}

export type TemplateProps = ServerTemplateProps

export const Template = ({
    config,
    ...rest
}: TemplateProps) => {
    return <Provider config={config}>
        <Hooked
            config={config}
            {...rest}
        />
    </Provider>
}