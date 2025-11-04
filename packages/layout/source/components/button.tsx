import * as React from "react"
import { cn, cva, type VariantProps } from "@coolui/styles"


const buttonVariants = cva("",
  // "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      // variant: {
      //   default: "bg-accent text-typo-accent hover:bg-accent/90",
      //   outline: "border border-subtle bg-transparent hover:bg-muted",
      //   ghost: "hover:bg-muted text-typo-body",
      //   destructive: "bg-destructive text-typo-destructive hover:bg-destructive/90",
      // },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4 text-sm",
        lg: "h-10 px-6 text-base",
        icon: "h-9 w-9 p-0",
      },
      state: {
        default: "",
        loading: "opacity-75 pointer-events-none relative",
      },
    },
    defaultVariants: {
      // variant: "default",
      size: "md",
      state: "default",
    },
    compoundVariants: [
      {
        state: "loading",
        class: "cursor-wait",
      },
    ],
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  isIconOnly?: boolean
  loadingText?: string
  icon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      // variant,
      size,
      state,
      isIconOnly,
      loadingText,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const isLoading = state === "loading"

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ 
            // variant, 
            size: isIconOnly ? "icon" : size, 
            state
           }),
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="h-4 w-4 animate-spin text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          </span>
        )}

        <span className={cn(isLoading && "invisible flex items-center gap-2")}>
          {icon && !isIconOnly && icon}
          {isIconOnly ? icon : children}
        </span>
      </button>
    )
  }
)

Button.displayName = "Button"
