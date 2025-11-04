"use client";

import React, { useEffect, useState } from "react";
import { AppLayoutContextProps } from "./types";
import { AppLayoutContext } from "./contexts";

// Laptop breakpoint from Tailwind config (64rem = 1024px)
const LAPTOP_BREAKPOINT = 1024;

export const AppLayoutProvider = (props: { children?: React.ReactNode }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLaptop, setIsLaptop] = useState(false);

    // Handle scroll detection
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Handle window resize and laptop breakpoint detection
    useEffect(() => {
        const checkBreakpoint = () => {
            const isLaptopSize = window.innerWidth >= LAPTOP_BREAKPOINT;
            setIsLaptop(isLaptopSize);
            
            // Close sidebar on mobile/tablet when resizing down
            // Keep it open on laptop+
            if (isLaptopSize) {
                setOpen(false); // Reset mobile state when going to laptop view
            }
        };

        // Check initially
        checkBreakpoint();

        // Add resize listener
        window.addEventListener("resize", checkBreakpoint);
        return () => window.removeEventListener("resize", checkBreakpoint);
    }, []);

    const value: AppLayoutContextProps = {
        isLaptop,
        sidebar: {
            open: () => {
                // Only allow toggling on mobile/tablet
                if (!isLaptop) {
                    setOpen(true);
                }
            },
            close: () => {
                // Only allow toggling on mobile/tablet
                if (!isLaptop) {
                    setOpen(false);
                }
            },
            toggle: () => {
                // Only allow toggling on mobile/tablet
                if (!isLaptop) {
                    setOpen(prev => !prev);
                }
            },
            isOpen,
            isClose: !isOpen,
        },
        header: {
            scrolled,
        }
    }

    return <AppLayoutContext.Provider value={value}>
        {props.children}
    </AppLayoutContext.Provider>
}