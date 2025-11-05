"use client"

import { HeaderAction } from "../components/HeaderAction"
import { useAppLayout } from "../lib/context-hooks"
import type { AppSidebarToggleProps } from "./types"

export const AppSidebarToggle = ({
  sidebarEnabled
}: AppSidebarToggleProps) => {

  const { toggleSidebar } = useAppLayout();

  if (!sidebarEnabled) return null

  return (
    <HeaderAction
      className="laptop:hidden"
      onClick={toggleSidebar}
      icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="size-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>}
    />
  )
}
