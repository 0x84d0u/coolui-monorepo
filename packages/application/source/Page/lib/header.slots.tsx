import { Section } from "@/server"
import { Typography } from "@coolui/typography"
import { Content } from "./types"

export const Wrapper = (props: { children?: React.ReactNode }) => {
    return <Section spacing="comfortable"> {props.children} </Section>
}

export const Title = (props: { title?: Content['title'] }) => {
    if (!props.title) return null
    return <Typography.H1>{props.title}</Typography.H1>
}

export const Description = (props: { description?: Content['description'] }) => {
    if (!props.description) return null
    return <Typography.Body>{props.description}</Typography.Body>
}