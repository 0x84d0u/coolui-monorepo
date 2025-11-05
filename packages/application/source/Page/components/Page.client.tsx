'use client'

import { PageProvider } from "../state"
import { Toc } from './Toc.client'

interface ClientPageProps {
  title?: string
  showToc?: boolean
  tocPosition?: 'left' | 'right'
  children: React.ReactNode
}

export const ClientPage = ({
  title,
  children,
  showToc = true,
  tocPosition = 'right',
}: ClientPageProps) => {
  return (
    <PageProvider>
      <div className="grid grid-cols-12 gap-8">
        {showToc && tocPosition === 'left' && <Toc />}
        <main className="col-span-12 lg:col-span-9 space-y-16">
          {title && <h1 className="text-4xl font-bold mb-8">{title}</h1>}
          {children}
        </main>
        {showToc && tocPosition === 'right' && <Toc />}
      </div>
    </PageProvider>
  )
}
