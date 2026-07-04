import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
    Eye,
    Bookmark,
    Users,
    Target,
} from "lucide-react";


const cards = [
    {
        icon: Eye,
        value: "1,284",
        label: "Questions Viewed",
    },
    {
        icon: Bookmark,
        value: "42",
        label: "Questions Saved",
    },
    {
        icon: Users,
        value: "8",
        label: "Communities Joined",
    },
    {
        icon: Target,
        value: "88.5%",
        label: "Quiz Accuracy",
    },
];

export default function StatisticCard12() {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="@container grow w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full lg:grid-cols-4 gap-5 ">
                    {cards.map((card, i) => (
                        <Card key={i}>
                            <CardContent className="flex flex-col items-start gap-6">
                                {/* Icon */}
                                <div className={cn(`rounded-xl p-1 flex items-center justify-center  border`)}>
                                    <card.icon className="size-6" />
                                </div>

                                {/* Value & Label */}
                                <div className="space-y-0.5">
                                    <div className="text-2xl font-bold text-foreground leading-none">{card.value}</div>
                                    <div className="text-sm text-muted-foreground">{card.label}</div>
                                </div>
                                {/* {card.info} */}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

