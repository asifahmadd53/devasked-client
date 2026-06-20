"use client";

import { useState, useEffect, useRef } from "react";
import { Bookmark, ChevronDown } from "lucide-react";

function PillBadge({ text }: { text: string }) {
    return (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: "#e8f0fe", color: "#1e3a5f", border: "1px solid #d0e3f7" }}>
            {text}
        </span>
    );
}

const tagStyles: Record<string, { bg: string; color: string }> = {
    nodejs: { bg: "#fef3c7", color: "#d97706" },
    hard: { bg: "#fee2e2", color: "#dc2626" },
    "top-tier": { bg: "#dbeafe", color: "#2563eb" },
    sql: { bg: "#fef3c7", color: "#d97706" },
    medium: { bg: "#fef9c3", color: "#ca8a04" },
    startup: { bg: "#d1fae5", color: "#059669" },
};

// ============================================
// QUESTION CARD COMPONENT (inline)
// ============================================
function QuestionCard({
    title,
    tags,
    bookmarked = false,
}: {
    title: string;
    tags: { label: string; variant: string }[];
    bookmarked?: boolean;
}) {
    return (
        <div className="border-b border-slate-100 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <h4 className="text-sm font-semibold text-slate-800 mb-2 leading-relaxed">
                        {title}
                    </h4>
                    <div className="flex gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-0.5 rounded text-xs font-medium"
                                style={{
                                    background: tagStyles[tag.variant]?.bg || "#f1f5f9",
                                    color: tagStyles[tag.variant]?.color || "#64748b",
                                }}
                            >
                                {tag.label}
                            </span>
                        ))}
                    </div>
                </div>
                <button className={bookmarked ? "text-blue-500 ml-3" : "text-slate-400 ml-3"}>
                    <Bookmark className="w-5 h-5" fill={bookmarked ? "currentColor" : "none"} strokeWidth={2} />
                </button>
            </div>
        </div>
    );
}

function BrowseQuestions({ transparent = false }: { transparent?: boolean }) {
    const [activeTab, setActiveTab] = useState("All");
    const tabs = ["All", "React", "Node.js", "System Design"];

    const questions = [
        {
            title: "How does Node.js handle concurrency despite being single-threaded?",
            tags: [
                { label: "Node.js", variant: "nodejs" },
                { label: "Hard", variant: "hard" },
                { label: "Top-tier", variant: "top-tier" },
            ],
            bookmarked: false,
        },
        {
            title: "Write a SQL query to find the second highest salary...",
            tags: [
                { label: "SQL", variant: "sql" },
                { label: "Medium", variant: "medium" },
                { label: "Startup", variant: "startup" },
            ],
            bookmarked: true,
        },
    ];

    return (
        <div
            className="rounded-2xl p-6"
            style={{
                background: transparent ? "rgba(255,255,255,0.6)" : "#ffffff",
                backdropFilter: transparent ? "blur(10px)" : "none",
                boxShadow: transparent ? "none" : "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.03)",
            }}
        >
            <h3 className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">
                Browse Questions
            </h3>

            <div className="flex gap-2 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="px-4 py-1.5 rounded-full text-xs font-medium transition-all"
                        style={
                            activeTab === tab
                                ? { background: "#3b82f6", color: "#ffffff" }
                                : { background: "transparent", color: "#64748b", border: "1px solid #e2e8f0" }
                        }
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {questions.map((question, index) => (
                <QuestionCard
                    key={index}
                    title={question.title}
                    tags={question.tags}
                    bookmarked={question.bookmarked}
                />
            ))}
        </div>
    );
}


function ProgressChart() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const radius = Math.min(centerX, centerY) - 50;
        const innerRadius = radius * 0.65;

        const data = [
            { label: "React", value: 25, color: "#1e3a5f" },
            { label: "System Design", value: 45, color: "#1e40af" },
            { label: "DevOps", value: 5, color: "#93c5fd" },
            { label: "Operating System", value: 10, color: "#bfdbfe" },
            { label: "DSA", value: 15, color: "#60a5fa" },
        ];

        let currentAngle = -Math.PI / 2;

        data.forEach((segment) => {
            const sliceAngle = (segment.value / 100) * Math.PI * 2;

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
            ctx.closePath();
            ctx.fillStyle = segment.color;
            ctx.fill();

            currentAngle += sliceAngle;
        });

        // Draw legend labels around the chart
        currentAngle = -Math.PI / 2;
        data.forEach((segment) => {
            const sliceAngle = (segment.value / 100) * Math.PI * 2;
            const midAngle = currentAngle + sliceAngle / 2;

            // Position labels outside the donut
            const labelRadius = radius + 30;
            const labelX = centerX + Math.cos(midAngle) * labelRadius;
            const labelY = centerY + Math.sin(midAngle) * labelRadius;

            ctx.font = "10px Inter, sans-serif";
            ctx.fillStyle = "#64748b";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(`${segment.label}: ${segment.value}%`, labelX, labelY);

            currentAngle += sliceAngle;
        });
    }, []);

    return (
        <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.03)" }}>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-semibold text-slate-700">
                    Your Progress based upon Quiz Score
                </h3>
                <button className="flex items-center gap-1 text-sm text-slate-600 border border-slate-200 rounded-lg px-3 py-1.5">
                    This Week
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            <div className="flex justify-center">
                <canvas
                    ref={canvasRef}
                    style={{ width: "280px", height: "280px" }}
                />
            </div>
        </div>
    );
}


export default function FeaturesPage() {
    return (
        <main className="bg-white min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
        
            <section
                id="features"
                className="py-16 px-6"
                style={{ background: "linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)" }}
            >
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <PillBadge text="Why DevAsked?" />
                        <h1 className="text-4xl font-bold text-slate-800 mb-4">
                            Everything You Need To Succeed
                        </h1>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column */}
                        <div>
                            <BrowseQuestions />

                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                                    Browse and Filter the Questions
                                </h2>
                                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                                    Browse the questions and filter based upon company type, difficulty level and stack type.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div>
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                                    Solve the Questions to Track your Progress
                                </h2>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                    We also offer custom quizzes that you select according to your tech stack and by solving them you can track your progress.
                                </p>
                            </div>

                            <ProgressChart />
                        </div>
                    </div>

                    {/* Second Browse Section (Bottom) */}
                    <div className="mt-16">
                        <BrowseQuestions transparent />
                    </div>
                </div>
            </section>

            <div
                className="max-w-6xl mx-auto"
                style={{ height: "1px", background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)" }}
            />
        </main>
    );
}