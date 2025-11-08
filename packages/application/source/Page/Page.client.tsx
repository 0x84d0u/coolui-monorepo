"use client";

import { useAppTemplate } from "@/client";
import { Page as ServerPage, PageProps as ServerPageProps } from './Page'

import { useEffect, useState } from "react";

export type PageProps = ServerPageProps

export const Page = ({ tocItems = [], ...props }: PageProps) => {

  const { headerIsScrolled } = useAppTemplate();
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

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [tocItems])

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

      if (headerIsScrolled) {
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
  }, [headerIsScrolled])


    return <ServerPage
        {...props}
        tocItems={tocItems}
        activeTocId={activeId}
    />
}