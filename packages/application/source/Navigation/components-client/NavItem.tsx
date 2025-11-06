"use client";

import { Typography } from "@coolui/core";
import React, { useState } from "react";
import { NavItemType } from "./Nav";
import { cn } from "@coolui/styles";


export type NavItemProps = NavItemType & {
    level?: number
    indent?: number
}


export const NavItem = ({
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

}: NavItemProps) => {
    console.log(`${label} : level ${level}`)
    const isCollapsible = items && items.length > 0
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
        <ButtonWrapper onClick={handleHeaderClick}>
            <Icon content={icon} />
            <Label content={label} />
            <div className="flex-1"></div>
            {isCollapsible && <ToggleIcon isOpen={isOpen} renderToggle={renderToggle} />}
        </ButtonWrapper>
        {isCollapsible && <BodyWrapper isOpen={isOpen} marginLeft={(level + 1) * indent}>
            {items.map((itemProps, index) => <NavItem
                key={index}
                {...itemProps}
                level={level + 1}
            />)}
        </BodyWrapper>}
    </Wrapper>
}


const Wrapper = ({ children }: {
    children: React.ReactNode
    level?: number
}) => <div className="flex flex-col"> {children} </div>

const ButtonWrapper = ({ children, onClick }: {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    children: React.ReactNode
}) => {
    const className = cn(
        "cursor-pointer",
        "flex",
        "p-2"
    )
    return <button onClick={onClick} className={className}> {children} </button>
}

const Label = ({ content }: {
    content?: string
}) => content && <Typography.H5 tagname="span">{content}</Typography.H5>

const Icon = ({ content }: {
    content: React.ReactNode
}) => content

const ToggleIcon = ({ renderToggle, isOpen }: {
    renderToggle?: (isOpen: boolean) => React.ReactNode
    isOpen: boolean
}) => renderToggle ? renderToggle(isOpen) : <Typography.H5 tagname="span" className={cn("transition-transform", isOpen ? "rotate-180" : "rotate-0")}>{`>`}</Typography.H5>

const BodyWrapper = ({ children, isOpen, marginLeft }: {
    children: React.ReactNode
    marginLeft: number
    isOpen?: boolean
}) => {
    const className = cn(
        "transition-all",
        isOpen ? "max-h-[1000px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
    );
    return <div className={className} style={{ marginLeft }}>{children}</div>
}