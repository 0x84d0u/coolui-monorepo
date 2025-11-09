import { Container } from "@coolui/core"
import { FooterConfig } from "../types"
import { cn } from "@coolui/styles";

export const AppFooter = ({
    footerContent,
    footerEnabled
}: FooterConfig) => {
    if (!footerEnabled) return null;
    return <footer className={cn(
        'bg-layout-bg text-layout-typo border-t border-layout-border'
    )}>
        <Container className="h-16">
            {footerContent}
        </Container>
    </footer>
}