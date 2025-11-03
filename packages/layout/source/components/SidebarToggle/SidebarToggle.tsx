"use client"

import { useRootLayout } from "@/client";
import { Button } from "@/ui/temporary/button";

export function SidebarToggle() {
    const { sidebar } = useRootLayout();
    return <Button
        //   iconName='menu'
        icon={<> ... </>}
        isIconOnly
        onClick={() => sidebar.toggle()}
        aria-label="Toggle sidebar"
        className="laptop:hidden"
    />
}
