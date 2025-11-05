import { GroupContent } from "./types"

export const Wrapper = (props: { children?: GroupContent['sections'] }) => {
    return <div className="flex-1 flex flex-col">
        {props.children}
    </div>
}