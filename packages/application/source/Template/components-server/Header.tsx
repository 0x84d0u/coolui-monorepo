import { Layout } from "../components-ui/header.layout"
import { Config, State } from "../lib/types"
import { Logo } from "./Logo"


export const Header = ({
    config,
    state,
    toolbar,
    actions,
}: {
    config?: Partial<Config>
    state?: Partial<State>
    toolbar?: React.ReactNode
    actions?: React.ReactNode
}) => {
    const isEnabled = config?.headerEnabled;
    if (!isEnabled) return null;

    return <Layout
        hasBorder={state?.isSidebarOpen || state?.isHeaderScrolled || false}
        isFixed={config?.headerFixed}
        toolbar={toolbar}
        logo={<Logo  {...config} />}
        actions={actions}
    />
}
