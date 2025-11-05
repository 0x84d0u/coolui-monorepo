import React from 'react'
import { SectionGroupWrapper } from '../components-ui/section.slots'
import { PageConfig } from '../config/types'

export type SectionGroupProps = {
  config?: PageConfig
  children?: React.ReactNode
}

export const SectionGroup = ({ children }: SectionGroupProps) => {
  return <SectionGroupWrapper>
    {children}
  </SectionGroupWrapper>
}