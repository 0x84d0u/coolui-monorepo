import { Container } from "@/components/Container";
import { cn, Flex } from "@coolui/core";
import { ReactNode } from "react";

export type OwnProps = {
}

export type Props = OwnProps & {
    className?: string
    children?: ReactNode
}

export const Slot = ({
    className,
    children,
}: Props) => {
    return <footer
        className={cn(
            "border-t border-subtle bg-surface/70 text-typo-surface backdrop-blur-sm",
            "py-4 px-6 laptop:px-8",
            "text-sm",
            "transition-colors",
            className
        )}
    >
        <Container >
            <Flex direction='row' justify='between' className="h-16" gap='2'>
            {children}
            </Flex>
        </Container>
    </footer>
};