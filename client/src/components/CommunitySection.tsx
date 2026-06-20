import Link from "next/link"
import { Atom, Code2, Smartphone, Server, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const communities = [
    {
        id: "react",
        name: "React Track",
        members: "2.4k active members",
        icon: Atom,
    },
    {
        id: "python",
        name: "Python Community",
        members: "2.4k active members",
        icon: Code2,
    },
    {
        id: "flutter",
        name: "Flutter Track",
        members: "2.4k active members",
        icon: Smartphone,
    },
    {
        id: "system-design",
        name: "System Design",
        members: "4.1k active members",
        icon: Server,
    },
]

function CommunityCard({
    name,
    members,
    icon: Icon,
    className,
}: {
    name: string
    members: string
    icon: React.ElementType
    className?: string
}) {
    return (
        <div
            className={cn(
                "group flex items-center gap-4 rounded-2xl border bg-background px-5 py-4 transition-colors hover:border-foreground/20",
                className,
            )}
        >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border bg-card shadow-xs outline outline-border/80 outline-offset-2">
                <Icon className="size-5 text-primary/80" />
            </div>
            <div className="space-y-0.5">
                <h3 className="font-medium text-foreground text-sm">{name}</h3>
                <p className="text-muted-foreground text-xs">{members}</p>
            </div>
        </div>
    )
}

export function CommunitySection() {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto w-full max-w-6xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="mx-auto flex w-fit items-center gap-2 rounded-full border bg-muted px-3 py-1 text-xs text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-primary/70" />
                        Community Driven Approach
                    </span>
                    <h2 className="mt-4 font-medium text-xl md:text-2xl lg:text-3xl">Join Your Tech Community</h2>
                    <p className="mt-4 text-center text-muted-foreground text-sm md:text-base text-pretty">
                        {
                            "Don't prepare in isolation. Connect with specialized communities for React, Flutter, Backend, and more. Share experiences, get feedback, and grow with peers."
                        }
                    </p>
                </div>

                <div className="mt-12 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <CommunityCard {...communities[0]} />
                    <CommunityCard {...communities[1]} />

                    <div className="row-span-2 flex flex-col items-center justify-center gap-2 rounded-2xl border bg-card px-6 py-10 text-center shadow-xs sm:col-span-2 lg:col-span-1 lg:row-span-2">
                        <div className="flex size-12 items-center justify-center rounded-full border-4 border-dashed bg-background outline outline-border outline-offset-4">
                            <Users className="size-6 text-primary/90" />
                        </div>
                        <p className="mt-4 font-medium text-2xl md:text-3xl text-foreground">1000+</p>
                        <p className="text-muted-foreground text-sm">Active Communities</p>
                    </div>

                    <CommunityCard {...communities[2]} />
                    <CommunityCard {...communities[3]} />
                </div>

                <div className="mt-10 flex justify-center">
                    <Button render={<Link href="/communities" />} size="lg" className="px-6">
                        <span>Join Community</span>
                        <ArrowRight className="ml-1 size-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
