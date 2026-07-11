"use client";

import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider
} from "@/components/ui/tooltip";

interface SignOutButtonProps {
    isOpen: boolean | undefined;
}

export function SignOutButton({ isOpen }: SignOutButtonProps) {
    return (
        <div className="w-full px-2 pb-2">
            <TooltipProvider disableHoverableContent>
                <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                        <Button
                            onClick={() => { }}
                            variant="outline"
                            className="w-full justify-center h-10"
                        >
                            <span className={cn(isOpen === false ? "mr-0" : "mr-4")}>
                                <LogOut size={18} />
                            </span>
                            <p
                                className={cn(
                                    "whitespace-nowrap",
                                    isOpen === false ? "opacity-0 hidden" : "opacity-100"
                                )}
                            >
                                Sign out
                            </p>
                        </Button>
                    </TooltipTrigger>
                    {isOpen === false && (
                        <TooltipContent side="right">Sign out</TooltipContent>
                    )}
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}