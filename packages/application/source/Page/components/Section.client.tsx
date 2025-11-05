'use client'
import * as Slot from '../slots'
import { Container } from '@coolui/core'
import { useEffect } from 'react'
import { usePageContext } from '../client/PageContext'
import type { SectionOptions, SectionContent } from '../types'

import {
    Section as ServerSection,
    type SectionProps as ServerSectionProps

} from './Section.server'

export const Section = (props: ServerSectionProps) => {
  const { registerSection } = usePageContext()
  const title = props.title
  const id =  props.id || props.title?.toLowerCase().replace(/\s+/g, '-') ?? undefined

  useEffect(() => {
    if (id && props.title) registerSection({ id, title})
  }, [id, props.title, registerSection])

  return <ServerSection 
    id={id}
    {...props}
  />


}
