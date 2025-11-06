"use client"

import { cn } from "@coolui/styles"
import { useEffect, useState } from "react"
import { PageTocProps } from "./types"


export function PageToc({
    items
}: PageTocProps) {
    if (!items || items.length < 1) return null;

    const [activeId, setActiveId] = useState<string | null>(null)

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

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <nav className="sticky top-20 space-y-2">
            {items.map(({ id, title }) => (
                <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={cn(
                        "block text-sm text-left transition-colors",
                        activeId === id
                            ? "text-blue-600 font-semibold"
                            : "text-gray-500 hover:text-gray-800"
                    )}
                >
                    {title}
                </button>
            ))}
        </nav>
    )
}
