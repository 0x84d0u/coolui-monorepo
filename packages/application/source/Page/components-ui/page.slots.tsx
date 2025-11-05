import React from "react"

export const PageWrapper = (props: { children?: React.ReactNode }) => <div className="flex flex-col laptop:flex-row">{props.children}</div>
export const PageFooter = () => <div></div>

export const TableOfContentWrapper = (_props: { children?: React.ReactNode }) => <div>TOC Here</div>


