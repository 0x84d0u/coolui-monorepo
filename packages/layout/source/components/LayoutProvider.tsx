"use client";

import { LayoutContext, LayoutContextType } from "@/context/LayoutContext";
import React, { useEffect, useState } from "react";


export const LayoutProvider = (props: { children?: React.ReactNode }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const value: LayoutContextType = {
        sidebar: {
            open: () => setOpen(true),
            close: () => setOpen(false),
            toggle: () => setOpen(prev => !prev),
            isOpen,
            isClose: !isOpen
        },
        header: {
            scrolled,
        }
    }

    return <LayoutContext.Provider value={value}>
        {props.children}
    </LayoutContext.Provider>
}
