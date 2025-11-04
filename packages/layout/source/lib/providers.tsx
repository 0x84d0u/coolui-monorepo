"use client";

import React, { useEffect, useState } from "react";
import { AppLayoutContextProps } from "./types";
import { AppLayoutContext } from "./contexts";


export const AppLayoutProvider = (props: { children?: React.ReactNode }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const value: AppLayoutContextProps = {
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

    return <AppLayoutContext.Provider value={value}>
        {props.children}
    </AppLayoutContext.Provider>
}
