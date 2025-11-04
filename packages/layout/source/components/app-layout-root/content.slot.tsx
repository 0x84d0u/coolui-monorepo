import React from "react";
import { cn } from "@coolui/styles";

export type Props = {
  children?: React.ReactNode
  className?: string
}

export const Slot = ({ className, ...props }: Props) => <div
  className={cn(
    "min-h-screen",
    "flex-1 flex flex-col",
    "transition-colors",
    className
  )}
  {...props}
/>