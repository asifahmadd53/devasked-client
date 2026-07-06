// components/ui/filterTabs.tsx
'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ReactNode } from 'react';
import { Badge } from '../ui/badge';

interface FilterTabsProps<T extends string> {
    options: T[];
    value: T;
    onChange: (value: T) => void;
    icons?: Partial<Record<T, ReactNode>>;
}

export function FilterTabs<T extends string>({
    options,
    value,
    onChange,
    icons,
}: FilterTabsProps<T>) {
    return (
        <Tabs className='' value={value} onValueChange={(val) => onChange(val as T)}>
            <TabsList variant="line">
                {options.map((option) => (
                    <TabsTrigger className=" rounded-md px-3 py-1 bg-primary" key={option} value={option}>
                        {icons?.[option]}
                        {option}
                    </TabsTrigger>
                ))}
                <Badge className="h-5 w-5 p-0 flex items-center justify-center rounded-full text-[10px]">
                    5
                </Badge>
            </TabsList>
        </Tabs>

        
    );
}