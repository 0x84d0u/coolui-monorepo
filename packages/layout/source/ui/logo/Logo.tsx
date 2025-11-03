
import * as Root from '@/ui/logo/root.slot'
import { cn } from '@coolui/core'
import { Image, type ImageProps } from '@/ui/temporary/image.client'
import { TextProps, Typography } from '@coolui/typography'


export type LogoProps = {
    className?: {
        root?: string
        image?: string
        wordmark?: string
    }
    orientation?: Root.Props['orientation']
    wordmark?: string
    imageUrl?: string
    as?: ImageProps['as']
}

export const Logo = ({
    className,
    orientation = "horizontal",

    wordmark,
    imageUrl,
    as,
}: LogoProps) => {

    const rootProps: Root.Props = { orientation, className: className?.root }
    const wordmarkProps: TextProps = { children: wordmark, className: className?.wordmark }
    const imageProps: ImageProps = { as, src: imageUrl || "", alt: wordmark || "Logo", className: cn("h-8 w-8 object-contain", className?.image) }

    return (
        <Root.SLot {...rootProps}>
            {imageUrl && <Image {...imageProps} />}
            {wordmark && <Typography.Logo {...wordmarkProps} />}
        </Root.SLot>
    )
}
