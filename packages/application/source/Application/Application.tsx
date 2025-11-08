import { ThemeProvider } from "@/Theme/ThemeProvider"
import { type Config as ThemeConfig } from "@/Theme/types"
import { AppTemplateProvider } from "@/AppTemplate/AppTemplate.provider"

import { AppTemplate, type AppTemplateProps } from "@/AppTemplate/AppTemplate.client"

export type ApplicationProps = {
    themeConfig?: ThemeConfig,
    templateProps?: AppTemplateProps
}

export const Application = ({
    themeConfig,
    templateProps,
}: ApplicationProps) => {
    return <ThemeProvider config={themeConfig}>
        <AppTemplateProvider>
            <AppTemplate {...templateProps} />
        </AppTemplateProvider>
    </ThemeProvider>
}