import { Config, Content, GroupConfig, GroupContent } from "../lib/types"

export type SectionProps = Config & Omit<Content, 'content'> & {
    children?: Content['content']
    className?: string
}

export type SectionGroupProps =  GroupConfig & {
    children?: GroupContent['sections']
}
