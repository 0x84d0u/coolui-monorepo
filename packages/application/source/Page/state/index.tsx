'use client'
import { createContext, useContext, useState, useCallback } from 'react'

export interface TocItem {
  id: string
  title: string
}

interface PageContextValue {
  sections: TocItem[]
  registerSection: (item: TocItem) => void
}

const PageContext = createContext<PageContextValue | null>(null)

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [sections, setSections] = useState<TocItem[]>([])

  const registerSection = useCallback((item: TocItem) => {
    setSections((prev) => {
      if (prev.some((s) => s.id === item.id)) return prev
      return [...prev, item]
    })
  }, [])

  return (
    <PageContext.Provider value={{ sections, registerSection }}>
      {children}
    </PageContext.Provider>
  )
}

export const usePageContext = () => {
  const ctx = useContext(PageContext)
  if (!ctx) throw new Error('usePageContext must be used within a PageProvider')
  return ctx
}
