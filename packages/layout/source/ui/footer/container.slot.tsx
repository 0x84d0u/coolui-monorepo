import { Container, ContainerProps } from "@/components/Container/Container"
import { cn } from "@coolui/core"

export type Props = {
    children?: React.ReactNode
    className?: string
    size?: ContainerProps['size']
}

export const Slot = ({
    children,
    className,
    size,
} : Props) => {
    return <Container
        className={cn(
           "grid grid-cols-3 items-center h-16",
           className 
        )}
        size={size}
    >
        {children}
    </Container>
}