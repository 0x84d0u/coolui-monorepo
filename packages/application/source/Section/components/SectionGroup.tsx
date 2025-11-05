import { Wrapper } from "../lib/group.slots"
import { SectionGroupProps } from "./types"

export const SectionGroup = ({ children }: SectionGroupProps) => {
    return <Wrapper
        children={children}
    />
}