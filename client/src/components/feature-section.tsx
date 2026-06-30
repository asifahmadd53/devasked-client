import { ListFilter, PieChart } from "lucide-react"
import { QuestionBrowser } from "@/components/question-browser"
import { ProgressDonut } from "@/components/progress-donut"

export function FeaturesSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto w-full max-w-7xl space-y-12">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="mx-auto flex w-fit items-center gap-2 rounded-full border bg-muted px-3 py-1 text-xs text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-primary/70" />
                        Why DevAsked?
                    </span>
                    <h2 className="mt-4 font-medium text-xl md:text-2xl lg:text-3xl">Everything You Need To Succeed</h2>
                </div>

                <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-2">
                    {/* Browse & filter */}
                    <div className="group relative overflow-hidden rounded-2xl border bg-background px-6 pt-6 pb-8 md:px-8 md:pt-8">
                        <QuestionBrowser />
                        <div className="mt-6 flex items-start gap-3">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-card shadow-xs outline outline-border/80 outline-offset-2">
                                <ListFilter className="size-5 text-primary/80" />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="font-medium text-foreground text-lg">Browse and Filter the Questions</h3>
                                <p className="text-muted-foreground text-sm">
                                    Browse the questions and filter based upon company type, difficulty level and stack type.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Track progress */}
                    <div className="group relative overflow-hidden rounded-2xl border bg-background px-6 pt-6 pb-8 md:px-8 md:pt-8">
                        <div className="flex items-start gap-3">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-card shadow-xs outline outline-border/80 outline-offset-2">
                                <PieChart className="size-5 text-primary/80" />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="font-medium text-foreground text-lg">Solve the Questions to Track your Progress</h3>
                                <p className="text-muted-foreground text-sm">
                                    We also offer custom quizzes that you select according to your tech stack and by solving them you can
                                    track your progress.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 rounded-xl border bg-card p-5 shadow-xs">
                            <div className="flex items-center justify-between">
                                <p className="font-medium text-sm text-card-foreground">Your Progress based upon Quiz Score</p>
                                <span className="text-xs text-muted-foreground underline underline-offset-2">This Week</span>
                            </div>
                            <div className="mt-5">
                                <ProgressDonut />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full-width browser */}
                <div className="mx-auto max-w-6xl rounded-2xl border bg-muted/40 p-4 md:p-6">
                    <QuestionBrowser compact />
                </div>
            </div>
        </section>
    )
}
