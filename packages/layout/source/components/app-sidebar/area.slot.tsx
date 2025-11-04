import { Flex } from "@coolui/core"
import { cn } from "@coolui/styles"
import React from "react"

export type Props = { children?: React.ReactNode, className?: string }

export const Branding = ({ className, children }: Props) => <Flex direction='column' className={cn("p-6 border-b border-subtle", className)}>{children}</Flex>
export const Navigation = ({ className, children }: Props) => <Flex direction='column' className={cn("p-6 flex-1 overflow-auto", className)}>{children}</Flex>
export const Cta = ({ className, children }: Props) => <Flex direction='column' className={cn("p-6 border-t border-subtle", className)}>{children}</Flex>
