import { Config, Content, GroupConfig, GroupContent, JsxProps } from "../lib/types"

export type SectionProps =
    Config &
    Omit<Content, 'content'> &
    Pick<JsxProps, 'className' | 'children' | 'id'>

export type SectionGroupProps = GroupConfig & {
    children?: GroupContent['sections']
}
