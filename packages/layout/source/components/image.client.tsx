"use client";

import * as React from "react"
import { cn } from "@coolui/styles";

export type ImageProps<T extends React.ElementType = "img"> = {
  /** Source of the image */
  src: string
  /** Alt text */
  alt?: string
  /** Shape or rounding */
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full"
  /** Object-fit behavior */
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  /** Optional fallback URL or React node */
  fallback?: string | React.ReactNode
  /** Aspect ratio (like 16/9, 1/1, etc.) */
  ratio?: number
  /** Custom class names */
  className?: string
  /** Image loader or component override */
  as?: T
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "src" | "alt">

export const Image = <T extends React.ElementType = "img">({
  src,
  alt,
  radius = "md",
  fit = "cover",
  ratio,
  fallback,
  className,
  as,
  ...props
}: ImageProps<T>) => {
  const ImageComp = as || "img"
  const [error, setError] = React.useState(false)

  // Tailwind-style radius map (you can adapt to tokens)
  const radiusMap = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  }

  const imageElement = !error ? (
    <ImageComp
      {...props}
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={cn(
        "object-center",
        fit && `object-${fit}`,
        radiusMap[radius],
        className
      )}
    />
  ) : typeof fallback === "string" ? (
    <img src={fallback} alt={alt} className={cn(radiusMap[radius], className)} />
  ) : (
    fallback
  )

  if (ratio) {
    return (
      <div
        className={cn("relative overflow-hidden", radiusMap[radius])}
        style={{ aspectRatio: ratio }}
      >
        {imageElement}
      </div>
    )
  }

  return imageElement
}
