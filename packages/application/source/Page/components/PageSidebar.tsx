import { Wrapper } from "../lib/sidebar.slots";
import { PageSidebarProps } from "./types";

export const PageSidebar = ({ config, content }: PageSidebarProps) => {
    return <Wrapper
        enabled={config?.enableSidebar}
        position={config?.sidebarPosition || 'right'}
        children={content?.sidebar}
    />
}