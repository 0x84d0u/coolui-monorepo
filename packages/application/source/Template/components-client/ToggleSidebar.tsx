"use client"

import { HeaderAction } from "../components-ui/HeaderAction"
import { useTemplate } from "../lib/useTemplate"

export const ToggleSidebar = () => {
  const { toggleSidebar } = useTemplate()

  return (
    <HeaderAction
      className="laptop:hidden"
      onClick={toggleSidebar}
      label="Toggle Sidebar"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="size-5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      }
    />
  )
}

ToggleSidebar.displayName = "ToggleSidebar"