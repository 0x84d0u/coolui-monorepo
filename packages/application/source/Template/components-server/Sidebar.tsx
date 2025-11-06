import { Layout } from "../components-ui/sidebar.layout"
import { Config, State } from "../lib/types"
import { Logo } from "./Logo"

export const Sidebar = ({
    config,
    state,
    header,
    body,
    footer
}: {
    config?: Partial<Config>
    state?: Partial<State>,

    header?: React.ReactNode
    body?: React.ReactNode
    footer?: React.ReactNode

}) => {
    const isEnabled = config?.sidebarEnabled;
    if (!isEnabled) return null;

    const isOpen = state?.isSidebarOpen

    return <Layout
        isOpen={isOpen}
        header={<>
            <Logo {...config} className="hidden laptop:flex"/>
            {header}
        </>}
        body={body}
        footer={footer}
    />
}
