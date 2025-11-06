import { Typography } from "@coolui/typography"
import { Section } from "../../Section/components-server/Section"

export type LayoutProps = {
    title?: string
    description?: string

}
export const Layout = ({ 
    title,
    description
}: LayoutProps) => {
    return <Wrapper>
        <Title content={title} />
        <Description content={description} />
    </Wrapper>
}

const Wrapper = ({ children }: { children?: React.ReactNode }) => {
    return <Section spacing="comfortable"> {children} </Section>
}

const Title = ({ content }: { content?: string }) => {
    if (!content) return null
    return <Typography.H1>{content}</Typography.H1>
}

const Description = ({ content }: { content?: string }) => {
    if (!content) return null
    return <Typography.Body>{content}</Typography.Body>
}