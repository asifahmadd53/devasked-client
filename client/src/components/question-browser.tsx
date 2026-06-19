import { Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"

const filters = ["All", "React", "Node.js", "System Design"]

type Tag = { label: string; tone: "neutral" | "hard" | "medium" | "brand" | "success" }

type Question = {
    title: string
    tags: Tag[]
    saved?: boolean
}

const questions: Question[] = [
    {
        title: "How does Node.js handle concurrency despite being single-threaded?",
        tags: [
            { label: "Node.js", tone: "neutral" },
            { label: "Hard", tone: "hard" },
            { label: "Top-tier", tone: "brand" },
        ],
    },
    {
        title: "Write a SQL query to find the second highest salary...",
        tags: [
            { label: "SQL", tone: "neutral" },
            { label: "Medium", tone: "medium" },
            { label: "Startup", tone: "success" },
        ],
        saved: true,
    },
]

const toneStyles: Record<Tag["tone"], string> = {
    neutral: "bg-secondary text-secondary-foreground",
    hard: "bg-red-50 text-red-600",
    medium: "bg-amber-50 text-amber-600",
    brand: "bg-brand-muted text-brand",
    success: "bg-emerald-50 text-emerald-600",
}

export function QuestionBrowser({ compact = false }: { compact?: boolean }) {
    return (
        <div className="rounded-xl border bg-card p-4 shadow-xs">
            <p className="text-xs font-medium text-muted-foreground">Browse Questions</p>

            <div className="mt-3 flex flex-wrap gap-2">
                {filters.map((f, i) => (
                    <span
                        key={f}
                        className={cn(
                            "rounded-full px-3 py-1 text-xs font-medium",
                            i === 0
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground",
                        )}
                    >
                        {f}
                    </span>
                ))}
            </div>

            <div className={cn("mt-4 grid gap-3", compact && "sm:grid-cols-2")}>
                {questions.map((q) => (
                    <div key={q.title} className="rounded-lg border bg-background p-3">
                        <div className="flex items-start justify-between gap-3">
                            <p className="text-sm font-medium leading-snug text-card-foreground">{q.title}</p>
                            <Bookmark
                                className={cn(
                                    "mt-0.5 size-4 shrink-0",
                                    q.saved ? "fill-primary text-primary" : "text-muted-foreground",
                                )}
                                aria-hidden="true"
                            />
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                            {q.tags.map((t) => (
                                <span key={t.label} className={cn("rounded px-1.5 py-0.5 text-[10px] font-semibold", toneStyles[t.tone])}>
                                    {t.label}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
