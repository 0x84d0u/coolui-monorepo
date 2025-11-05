import { Typography } from '@coolui/typography'
import type { PageConfig } from '../config/types'
import { Section } from './Section'

export type PageHeaderProps = {
    config?: PageConfig
}

export const PageHeader = ({
    config
}: PageHeaderProps) => {
    const title = config?.title;
    const description = config?.description;

    const hidden = !title && !description 
    if (hidden) return null
    return <Section>
        {title && <Typography.H1>{title}</Typography.H1>}
        {description && <Typography.Body>{description}</Typography.Body>}
    </Section>
}