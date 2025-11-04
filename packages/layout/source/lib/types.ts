export interface AppLayoutContextProps {
    sidebar: {
        open: () => void,
        close: () => void,
        toggle: () => void,
        isOpen: boolean,
        isClose: boolean,
    },
    header: {
        scrolled : boolean,
    }
}