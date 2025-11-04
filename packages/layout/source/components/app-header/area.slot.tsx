import { Flex } from "@coolui/core"
import { cn } from "@coolui/styles"
import React from "react"

export type Props = {
    children?: React.ReactNode
    className?: string
}

export const Toolbar = ({ className, children }: Props) => <Flex className={cn(className)}> {children} </Flex>
export const Branding = ({ className, children }: Props) => <Flex className={cn("justify-self-center", className)}> {children} </Flex>
export const Actions = ({ className, children }: Props) => <Flex className={cn("justify-end", className)}> {children} </Flex>



