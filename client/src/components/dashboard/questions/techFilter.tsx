import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { ReactNode } from "react";

interface FilterTabsProps<T extends string> {
    options: T[];
    value: T;
    onChange: (value: T) => void;
    icons?: Partial<Record<T, ReactNode>>;
}

export function TechFilter<T extends string>({
    options,
    value,
    onChange,
    icons,
}: FilterTabsProps<T>) {
    return (
        <Tabs value={value} className="w-full overflow-x-auto scrollbar-none" onValueChange={(val) => onChange(val as T)}> 
            <TabsList className="gap-2">
                {options.map((option) => (
                    <TabsTrigger className="rounded-sm px-3 py-1 shadow-none data-[state=active]:bg-secondary/60 cursor-pointer bg-white gap-2 border-primary/10 border "
 key={option} value={option}>
                        {icons?.[option]}
                        {option}
                    </TabsTrigger>
                ))}
            </TabsList>
            
        </Tabs>
    )
}
