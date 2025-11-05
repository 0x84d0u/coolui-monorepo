// server/ServerPage.tsx
import React from 'react'
import { Toc } from './Toc.server'

interface PageProps {
  title?: string
  toc?: React.ReactNode
  children: React.ReactNode
  showToc?: boolean
  tocPosition?: 'left' | 'right'
}

export const Page = ({
  title,
  children,
  toc,
  showToc = true,
  tocPosition = 'right',
}: PageProps) => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {showToc && tocPosition === 'left' && (toc ?? <Toc />)}
      <main className="col-span-12 lg:col-span-9 space-y-16">
        {title && <h1 className="text-4xl font-bold mb-8">{title}</h1>}
        {children}
      </main>
      {showToc && tocPosition === 'right' && (toc ?? <Toc />)}
    </div>
  )
}
