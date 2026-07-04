"use client";

import { DashboardFooter } from "@/components/layout/DashboardFooter";
import { Sidebar } from "@/components/layout/Sidebar";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";

export default function AdminPanelLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const sidebar = useStore(useSidebar, (x) => x);
    if (!sidebar) return null;
    const { getOpenState, settings } = sidebar;
    return (
        <>
            <Sidebar />
            <main
                className={cn(
                    "min-h-[calc(100vh_-_56px)] bg-subtle transition-[margin-left] ease-in-out duration-300",
                    !settings.disabled && (!getOpenState() ? "lg:ml-[90px]" : "lg:ml-72")
                )}
            >
                {children}
            </main>
            <footer
                className={cn(
                    "transition-[margin-left] ease-in-out duration-300",
                    !settings.disabled && (!getOpenState() ? "lg:ml-[90px]" : "lg:ml-72")
                )}
            >
                <DashboardFooter />
            </footer>
        </>
    );
}
