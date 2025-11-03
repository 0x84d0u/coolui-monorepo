"use client"

import { useLayout } from "@/client";
import { Button } from "@/temporary/button";

export function SidebarToggle() {
    const { sidebar } = useLayout();
    return <Button
        //   iconName='menu'
        icon={<> ... </>}
        isIconOnly
        onClick={() => sidebar.toggle()}
        aria-label="Toggle sidebar"
        className="laptop:hidden"
    />
}
