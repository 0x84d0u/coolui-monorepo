import { FooterConfig } from "../types";

export const PageFooter = ({
    footerContent
}: FooterConfig) => {
    if (footerContent) return null;
    return <div>
        {footerContent}
    </div>
}