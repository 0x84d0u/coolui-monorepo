import { Typography } from '@coolui/typography'

export type LogoProps = {
    /**
     * Logo text or brand name
     */
    name?: string
    /**
     * Optional logo image source
     */
    src?: string
    /**
     * Alt text for logo image
     */
    alt?: string
    /**
     * Link href for logo (optional)
     */
    href?: string
    /**
     * Custom className
     */
    className?: string
}

export const Logo = ({
    name = "CoolUI",
    src,
    alt = "Logo",
    href = "/",
    className
}: LogoProps) => {
    const content = (
        <div className={`flex items-center gap-3 ${className || ''}`}>
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className="h-8 w-auto"
                />
            ) : (
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent text-typo-accent font-bold text-lg">
                    {name.charAt(0)}
                </div>
            )}
            {name && (
                <Typography.H3 className="font-semibold text-lg">
                    {name}
                </Typography.H3>
            )}
        </div>
    )

    if (href) {
        return (
            <a href={href} className="inline-flex">
                {content}
            </a>
        )
    }

    return content
}