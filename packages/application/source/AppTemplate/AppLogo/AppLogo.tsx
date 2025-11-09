import { cn } from "@coolui/styles"
import { LogoConfig } from "../types"

export type AppLogoProps = LogoConfig &{
    className?: string
}

export const AppLogo = ({
    logoEnabled,
    logoSrc,
    logoWordmark,
    className,
}: AppLogoProps) => {
    if (!logoEnabled) return null;
    return <div className={cn(
        "flex items-center gap-3",
        // Transitions
        "transition-opacity duration-200",
        className,
    )}>
        {logoSrc && <img src={logoSrc} alt={logoWordmark || "Logo"} className={cn("h-8 w-8 object-contain", "antialiased",)} />}
        {logoWordmark &&  <span className={cn("font-semibold text-lg", "tracking-tight",)}> {logoWordmark} </span>}
        {!logoSrc && !logoWordmark && (
            <div className={cn(
                "h-8 w-8 rounded-lg",
                "bg-linear-to-br from-accent to-violet-600",
                "flex items-center justify-center",
                "text-typo-heading font-bold text-sm",
            )}>
                CoolUI
            </div>
        )}
    </div>
} 