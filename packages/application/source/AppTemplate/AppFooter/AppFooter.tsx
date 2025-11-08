import {  Container } from "@coolui/core"
import { FooterConfig } from "../types"

export const AppFooter = ({ 
    footerContent,
    footerEnabled
 }: FooterConfig) => {
    if(!footerEnabled) return null;
    return <footer>
        <Container className="h-16">
            {footerContent}
        </Container>
    </footer>
}