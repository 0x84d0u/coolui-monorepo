import React from 'react'
import { DEFAULT_PAGE_CONFIG } from '../config/constants'
import { PageConfig } from '../config/types'
import { PageWrapper } from '../components-ui/page.slots'
import { PageContent } from '../components-ui/types'
import { SectionGroup } from './SectionGroup'
import { TableOfContent } from './TableOfContent'
import { PageHeader } from './PageHeader'


export type PageProps = {
  config?: PageConfig
  state?: null
  content?: PageContent
  children?: React.ReactNode
}

export const Page = ({
  config = DEFAULT_PAGE_CONFIG,
  children,
}: PageProps) => {


  return <PageWrapper>
    <TableOfContent
      config={config}
    />
    <SectionGroup
      config={config}
    >
      <PageHeader
        config={config}
      />
      {children}
    </SectionGroup>
  </PageWrapper>

}
