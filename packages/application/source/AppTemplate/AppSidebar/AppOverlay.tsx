import { Overlay } from "@coolui/core";
import { SidebarConfig } from "../types";

export const AppOverlay = (props: SidebarConfig) => {
    return <Overlay 
        isOpen={props.sidebarIsOpen}
        onClick={props.closeSidebar}
    />
}