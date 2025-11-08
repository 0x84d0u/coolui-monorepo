import React from "react"
import { SectionConfig, SectionsConfig } from "../types"
import { PageSection } from "../PageSection/PageSection"

export const PageSections = ({
    alternateSections,
    sectionProps,
    children,
}: SectionsConfig) => {

    const enhancedChildren = React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null

        const isSection = (child.type as any)?.displayName === PageSection.displayName

        const alternate: Partial<SectionConfig> = alternateSections && index % 2 !== 0
                ? { colorTheme: "secondary" as const }
                : {}

        if (isSection) {
            // Merge props into existing Section
            return React.cloneElement(child, {
                ...sectionProps,
                ...alternate,
                ...child.props,
            })
        }

        // Otherwise wrap with Section
        return (
            <PageSection key={index} {...sectionProps} {...alternate}>
                {child}
            </PageSection>
        )
    })

    return <>{enhancedChildren}</>
}

PageSections.displayName = "PageSections"
