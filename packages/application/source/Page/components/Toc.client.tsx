'use client'

import { usePageContext } from "../state"

export const Toc = () => {
  const { sections } = usePageContext()
  if (sections.length === 0) return null

  return (
    <aside className="hidden lg:block col-span-3 sticky top-24 self-start">
      <h3 className="text-sm font-semibold mb-3">Table of Contents</h3>
      <ul className="space-y-1 text-sm">
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="hover:underline">
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
