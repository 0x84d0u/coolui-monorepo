import { Overlay as UiOverlay } from '@coolui/core'
import { State } from '../lib/types'

export const Overlay = ({
    isSidebarOpen,
    closeSidebar
}: Partial<State>) => <UiOverlay isOpen={isSidebarOpen} onClick={closeSidebar} />
