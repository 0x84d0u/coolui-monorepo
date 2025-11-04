import {  cva, VariantProps } from "@coolui/styles";
import { TextProps, Typography } from "@coolui/typography";

export const variants = cva("", {
    variants: {
        intent: {
            "display-title": "",
            "display-subtitle": "",
            "page-title": "",
            "page-subtitle": "",
            "section-title": "",
            "section-subtitle": "",
            "block-title": "",
            "block-subtitle": "",
        },
    },
})

export type Props = TextProps & VariantProps<typeof variants>

export const Slot = ({
    intent,
    ...props
}: Props) => {
    switch (intent) {
        case "display-title": return <Typography.Display {...props} />;
        case "display-subtitle": return <Typography.Body{...props} />;
        case "page-title": return <Typography.H1 {...props} />;
        case "page-subtitle": return <Typography.Body{...props} />;
        case "section-title": return <Typography.H2 {...props} />;
        case "section-subtitle": return <Typography.Body{...props} />;
        case "block-title": return <Typography.H3 {...props} />;
        case "block-subtitle": return <Typography.Body{...props} />;
        default: return null;
    }
}