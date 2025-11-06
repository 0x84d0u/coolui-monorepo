
import { Config } from '../lib/types'
import { Logo as UiLogo } from '@coolui/core'

export const Logo = ({
    logoEnabled,
    logoImgUrl,
    logoWordmark
}: Partial<Config>) => logoEnabled ? <UiLogo name={logoWordmark} src={logoImgUrl} /> : null
