import React from 'react'

export const Sections = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col divide-y divide-border">{children}</div>
}