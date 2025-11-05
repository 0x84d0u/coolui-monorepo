import React from "react"
import { cn } from "@coolui/styles"

export interface HeaderActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  icon?: React.ReactNode
  label?: string
}

export const HeaderAction = ({
  active,
  icon,
  label,
  className,
  ...props
}: HeaderActionProps) => {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "flex items-center justify-center gap-1",
        "rounded-lg border border-border",
        "text-sm font-semibold",
        "p-2",
        // "inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium transition-colors",
        // "active:bg-accent active:text-typo-accent",
        // "text-(--cool-header-color)",
        // active && "bg-(--cool-surface-active)",
        className
      )}
      aria-label={label}
    >
      {icon ?? label}
    </button>
  )
}
