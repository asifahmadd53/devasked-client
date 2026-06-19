type Segment = {
    label: string
    value: number
    color: string
}

const segments: Segment[] = [
    { label: "System Design", value: 45, color: "var(--chart-5)" },
    { label: "React", value: 25, color: "var(--chart-1)" },
    { label: "DSA", value: 15, color: "var(--chart-2)" },
    { label: "Operating System", value: 10, color: "var(--chart-3)" },
    { label: "DevOps", value: 5, color: "var(--chart-4)" },
]

export function ProgressDonut() {
    const radius = 60
    const stroke = 18
    const circumference = 2 * Math.PI * radius
    let offset = 0

    return (
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
            <svg
                viewBox="0 0 160 160"
                className="size-40 shrink-0 -rotate-90"
                role="img"
                aria-label="Quiz score breakdown by topic"
            >
                {segments.map((s) => {
                    const dash = (s.value / 100) * circumference
                    const segment = (
                        <circle
                            key={s.label}
                            cx="80"
                            cy="80"
                            r={radius}
                            fill="none"
                            stroke={s.color}
                            strokeWidth={stroke}
                            strokeDasharray={`${dash} ${circumference - dash}`}
                            strokeDashoffset={-offset}
                        />
                    )
                    offset += dash
                    return segment
                })}
            </svg>

            <ul className="grid grid-cols-1 gap-2 text-sm">
                {segments.map((s) => (
                    <li key={s.label} className="flex items-center gap-2">
                        <span className="size-2.5 rounded-full" style={{ backgroundColor: s.color }} aria-hidden="true" />
                        <span className="text-muted-foreground">{s.label}</span>
                        <span className="ml-auto font-semibold text-foreground">{s.value}%</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
