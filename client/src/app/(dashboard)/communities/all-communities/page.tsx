"use client";

import { useState, useMemo } from "react";
import { mockCommunities } from "@/lib/mock-data";
import { CommunityCard } from "@/components/dashboard/communities/communityCard";
import { Pagination } from "@/components/dashboard/questions/pagination";
import { PopularNowSidebar } from "@/components/dashboard/communities/popularNowSideBar";
import { TechFilter } from "@/components/dashboard/questions/techFilter";
import { TechStackType } from "@/types/dashboard";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ContentLayout } from "@/components/layout/DashboardContent";

const ITEMS_PER_PAGE = 4;

export default function AllCommunitiesPage() {
    const [selectedTech, setSelectedTech] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [joinedCommunities, setJoinedCommunities] = useState<string[]>([]);
    const [selectedTechStack, setSelectedTechStack] =
        useState<TechStackType>("All");
    const [selectedSort, setSelectedSort] = useState("Latest");
    const techStacks:TechStackType[] = [
        "All",
        "React",
        "Node.js",
        "AWS",
        "Python",
        "System Design",
    ];
    const sortOptions = ["Latest", "Most Viewed", "Most Saved"];

    const filteredCommunities = useMemo(() => {
        if (selectedTech === "All") {
            return mockCommunities;
        }
        return mockCommunities.filter((community) =>
            community.name.toLowerCase().includes(selectedTech.toLowerCase()),
        );
    }, [selectedTech]);

    const paginatedCommunities = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return filteredCommunities.slice(start, end);
    }, [filteredCommunities, currentPage]);

    const totalPages = Math.ceil(filteredCommunities.length / ITEMS_PER_PAGE);

    const handleJoin = (id: string) => {
        setJoinedCommunities((prev) =>
            prev.includes(id) ? prev.filter((cId) => cId !== id) : [...prev, id],
        );
    };

    const onTechStackChange = (tech: TechStackType) => {
        setSelectedTechStack(tech);
        setSelectedTech(tech);
    };

    const onSortChange = (sort: string) => {
        setSelectedSort(sort);
    };

    interface QuestionFiltersProps {
        onTechStackChange: (tech: TechStackType) => void;
        onSortChange: (sort: string) => void;
    }

    return (
        <ContentLayout title="My Communities">
            <div className="">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Explore Communities
                    </h1>
                    <p className="text-slate-600 mt-1">
                        Join as many tech communities as you want to boost your preparation
                    </p>
                </div>

                {/* Filter row - full width, dono columns ke upar */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6">
                    <TechFilter
                        options={techStacks}
                        value={selectedTechStack}
                        onChange={onTechStackChange}
                    />
                    <div className="flex items-center mt-3 lg:mt-0 lg:gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-primary/80 tracking-wider whitespace-nowrap">
                                Sort By:
                            </span>
                        </div>
                        <div>
                            <Select
                                value={selectedSort}
                                onValueChange={(value) => value && onSortChange(value)}
                                aria-label="Select framework"
                            >
                                <SelectTrigger className="w-45">
                                    <SelectValue placeholder="Select framework" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {sortOptions.map((option) => (
                                            <SelectItem className="w-45" key={option} value={option}>
                                                {option}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Ab grid - cards aur sidebar dono same line se start honge */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left side */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center gap-6 mb-3">
                            <label className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                                <span>Tech Stack:</span>
                            </label>
                        </div>

                        <div className="mb-4 text-sm text-slate-600">
                            Showing 04 of 110 Communities
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {paginatedCommunities.map((community) => (
                                <CommunityCard
                                    icon={community.icon}
                                    key={community.id}
                                    community={community}
                                    onJoin={handleJoin}
                                />
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        )}
                    </div>

                    {/* Right side - ab "Tech Stack:" label ke barabar se start hoga */}
                    <div className="lg:col-span-1">
                        <PopularNowSidebar communities={mockCommunities.slice(0, 3)} />
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
}
