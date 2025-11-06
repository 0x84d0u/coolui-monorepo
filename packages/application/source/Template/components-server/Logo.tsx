
import { Config } from '../lib/types'
import { Logo as UiLogo } from '@coolui/core'

export const Logo = ({
    logoEnabled,
    logoImgUrl,
    logoWordmark,
    className
}: Partial<Config> & {
    className?: string
}) => logoEnabled ? <UiLogo name={logoWordmark} src={logoImgUrl} className={className} /> : null
