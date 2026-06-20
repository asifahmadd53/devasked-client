import {
    Layout,
    Shield,
    Zap,
} from "lucide-react";



type ProblemType = {
    title: string;
    icon: React.ReactNode;
    description: string;
};

export function ProblemCard({
    problem,
    className,
    ...props
}: React.ComponentProps<"div"> & {
    problem: ProblemType;
}) {
    return (

        <div className="relative bg-white w-full p-4 md:p-6 rounded-[2rem] md:rounded-3xl flex flex-col transition-all duration-500 group">
            <div
                style={{ transform: "translateZ(50px)" }}
                className="flex flex-col h-full px-2"
            >
                <div className="mb-6 md:mb-8 w-14 min-h-14 md:w-14 md:min-h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 ease-out shadow-sm group-hover:shadow-xl">
                    {problem.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-5 tracking-tight">
                    {problem.title}
                </h3>

                <p className="text-gray-500 text-base leading-relaxed mb-6 md:mb-8 font-light line-clamp-3 md:line-clamp-none">
                    {problem.description}
                </p>

            </div>

            {/* Thick Shadow handling */}
            <div className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] bg-black/5 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-8 scale-95" />        </div>

    );
}

export const problems: ProblemType[] = [
    {
        title: "Outdated Resources",
        icon: <Layout />,
        description: "Companies have moved on — DevAsked is updated daily with real, recent interview questions.",
    },
    {
        title: "Isolated Preparation",
        icon: <Shield />,
        description: "Studying alone kills progress. DevAsked connects you with devs on the same journey.",
    },
    {
        title: "No Difficulty Context",
        icon: <Zap />,
        description: "Hard at a startup ≠ hard at FAANG. DevAsked gives you the context that actually matters.",
    },
];