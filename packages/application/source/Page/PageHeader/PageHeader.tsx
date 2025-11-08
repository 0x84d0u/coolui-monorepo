import { Typography } from "@coolui/typography"
// import { Section } from "../../Section/components-server/Section"
import { HeaderConfig } from "../types"
import { PageSection } from "@/Page/PageSection/PageSection";

export const PageHeader = ({ 
    title,
    description,
}: HeaderConfig) => {
    if (!title && !description) return null;
    return <PageSection spacing="comfortable">
        <Typography.H1>{title}</Typography.H1>
        <Typography.Body>{description}</Typography.Body>
    </PageSection>
}

