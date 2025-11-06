import { Layout } from '../components-ui/section.layout'
import { Config } from '../lib/types'

export type SectionProps = Config & {
    id?: string;
    className?: string;
    children?: React.ReactNode;
    title?: string;
    description?: string;
    headerExtra?: React.ReactNode;
    footer?: React.ReactNode;
}

export const Section = (props: SectionProps) => {
    return <Layout {...props} />
}