import { useAppTemplate } from "./AppTemplate.provider";
import { AppLayout as ServerAppLayout, AppLayoutProps as ServerAppLayoutProps } from "./AppTemplate";

// import { ToggleTheme } from "@/Template/components-client/ToggleTheme";

export type AppTemplateProps = ServerAppLayoutProps

export const AppTemplate = (props: AppTemplateProps) => {
    const state = useAppTemplate();
    return <ServerAppLayout
        {...props}
        headerToolbarContent={<>
            {/* <ToggleTheme /> */}
            {props.headerToolbarContent}
        </>}
        {...state}
    />
}

