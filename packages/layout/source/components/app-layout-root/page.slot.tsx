import React from "react";
import { cn } from "@coolui/styles";

export type Props = {
  children?: React.ReactNode;
  className?: string
}

export const Slot = ({
  children,
  className,
  ...props
}: Props) => (
  <main className={cn("flex-1 overflow-y-auto", className)} {...props}>
    {children}
  </main>
);
