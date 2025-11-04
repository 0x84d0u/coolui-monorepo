"use client"

import { useAppLayout } from "@/lib/hooks";
import { Button } from "@/components/button";

export function AppSidebarToggle() {
    const { sidebar } = useAppLayout();
    return <Button
        //   iconName='menu'
        icon={<> ... </>}
        isIconOnly
        onClick={() => sidebar.toggle()}
        aria-label="Toggle sidebar"
        className="laptop:hidden"
    />
}
