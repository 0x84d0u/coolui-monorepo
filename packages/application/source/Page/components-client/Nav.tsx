"use client"

import { useEffect, useState } from "react"
import { useTemplate } from "@/client"
import { Nav as ServerNav, NavProps as ServerNavProps } from "../components-server/Nav"

export type NavProps = Pick<ServerNavProps, "items">

export const Nav = ({ items }: NavProps) => {
  if (!items || items.length < 1) return null

  const { isHeaderScrolled } = useTemplate()
  const [activeId, setActiveId] = useState<string | null>(null)

  // 🔹 Observe sections to highlight active one
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  // 🔹 Delegate click events from nav container
  useEffect(() => {
    const container = document.getElementById("page-nav")
    if (!container) return

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement
      const id = target.getAttribute("data-id")
      if (!id) return

      const el = document.getElementById(id)
      if (!el) return

      if (isHeaderScrolled) {
        const headerHeightValue = getComputedStyle(document.documentElement)
          .getPropertyValue("--cool-header-height")
          .trim()
        const headerOffset = parseFloat(headerHeightValue) || 0
        const elementTop = el.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
          top: elementTop - headerOffset,
          behavior: "smooth",
        })
      } else {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }

    container.addEventListener("click", handleClick)
    return () => container.removeEventListener("click", handleClick)
  }, [isHeaderScrolled])

  return <ServerNav items={items} activeId={activeId} />
}
