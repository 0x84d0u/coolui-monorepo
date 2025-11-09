"use client";

import { useState } from "react";
import { NavItem } from "../types";
import { cn } from "@coolui/styles";
import { ChildrenComponent } from "@coolui/core";

export type AppNavItemProps = NavItem & {
    level?: number
    indent?: number
}

export const AppNavItem = ({
    // Content 
    label,
    icon,
    renderToggle,
    // Config
    defaultOpen = false,

    // State

    level = 0,
    indent = 20,

    items,

}: AppNavItemProps) => {
    // console.log(`${label} : level ${level}`)
    const isCollapsible = !!(items && items.length > 0)
    const [isOpen, setOpen] = useState(defaultOpen);

    const toggle = () => setOpen(prev => !prev);

    const handleHeaderClick = () => {
        if (isCollapsible) {
            toggle();
        } else {
            // logic to navigate
        }
    }

    return <Wrapper>
        <ButtonWrapper onClick={handleHeaderClick} isCollapsible={isCollapsible}>
            <Icon content={icon} />
            <Label content={label} />
            <div className="flex-1"></div>
            {isCollapsible && <ToggleIcon isOpen={isOpen} renderToggle={renderToggle} />}
        </ButtonWrapper>
        {isCollapsible && <BodyWrapper isOpen={isOpen} marginLeft={(level + 1) * indent}>
            {items.map((itemProps, index) => <AppNavItem
                key={index}
                {...itemProps}
                level={level + 1}
                indent={indent}
            />)}
        </BodyWrapper>}
    </Wrapper>
}


const Wrapper = (props: ChildrenComponent & { level?: number }) => <div className="flex flex-col"> {props.children} </div>

const ButtonWrapper = (props: {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    children: React.ReactNode,
    isCollapsible: boolean
}) => {

    return <button onClick={props.onClick} className={cn(
        // Base
        "w-full text-left",
        "flex items-center gap-3",
        "px-3 py-2 rounded-lg",

        // Interactive
        "cursor-pointer",
        "transition-colors duration-100",

        // Hover state
        "hover:bg-layout-bgHover",

        // Focus state
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring)",

        // Active state
        "active:scale-98 active:bg-layout-bgActive",

        // Typography
        "text-sm font-medium",
        "text-layout-typo",
    )}> {props.children} </button>
}

const Label = ({ content }: {
    content?: string
}) => content && <span className="flex-1 truncate">{content}</span>

const Icon = ({ content }: {
    content: React.ReactNode
}) => <span className="shrink-0 w-5 h-5 flex items-center justify-center">{content}</span>

const ToggleIcon = ({ renderToggle, isOpen }: {
    renderToggle?: (isOpen: boolean) => React.ReactNode
    isOpen: boolean
}) => renderToggle ? (
    <span className="shrink-0">{renderToggle(isOpen)}</span>
) : (
        <svg
            className={cn(
                "shrink-0 w-4 h-4",
                "transition-transform duration-100",
                isOpen ? "rotate-90" : "rotate-0"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
            />
        </svg>
    )

const BodyWrapper = ({ children, isOpen, marginLeft }: {
    children: React.ReactNode
    marginLeft: number
    isOpen?: boolean
}) => {
    return <div style={{ marginLeft }} className={cn(
        "overflow-hidden",
        "transition-all duration-250 ease-out",
        isOpen
            ? "max-h-[2000px] opacity-100 mt-1"
            : "max-h-0 opacity-0 mt-0",
        "space-y-1",
    )}>{children}</div>
}