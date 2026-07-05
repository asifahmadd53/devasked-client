// components/ui/filterTabs.tsx
'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ReactNode } from 'react';

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
        <Tabs value={value} onValueChange={(val) => onChange(val as T)}>
            <TabsList variant="line">
                {options.map((option) => (
                    <TabsTrigger key={option} value={option}>
                        {icons?.[option]}
                        {option}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
}