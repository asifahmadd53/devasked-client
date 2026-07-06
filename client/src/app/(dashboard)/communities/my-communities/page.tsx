'use client';

import { useState, useMemo } from 'react';
import { mockCommunities } from '@/lib/mock-data';
import { FilterTabs } from '@/components/dashboard/questions/filterTabs';
import { CommunityCard } from '@/components/dashboard/communities/communityCard';
import { Pagination } from '@/components/dashboard/questions/pagination';
import { PopularNowSidebar } from '@/components/dashboard/communities/popularNowSideBar';

const ITEMS_PER_PAGE = 4;

export default function CommunitiesPage() {
    const [selectedTech, setSelectedTech] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [joinedCommunities, setJoinedCommunities] = useState<string[]>([]);

    const techStacks = ['All', 'React', 'Node.js', 'AWS', 'Python', 'System Design'];

    const filteredCommunities = useMemo(() => {
        if (selectedTech === 'All') {
            return mockCommunities;
        }
        return mockCommunities.filter((community) =>
            community.name.toLowerCase().includes(selectedTech.toLowerCase())
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
            prev.includes(id) ? prev.filter((cId) => cId !== id) : [...prev, id]
        );
    };

    return (
        <main className="bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                {/* <Breadcrumb
                    items={[
                        { label: 'Dashboard', href: '/' },
                        { label: 'Community', href: '#' },
                        { label: 'Explore Communities' },
                    ]}
                /> */}

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Explore Communities</h1>
                    <p className="text-slate-600 mt-1">
                        Join as many tech communities as you want to boost your preparation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Tech Stack Filter */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                    Tech Stack:
                                </label>
                                <select className="px-3 py-1 rounded text-sm font-medium bg-white border border-slate-300 text-slate-900 cursor-pointer">
                                    <option>Sort</option>
                                </select>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {techStacks.map((tech) => (
                                    <FilterTabs
                                        key={tech}
                                        label={tech}
                                        isActive={selectedTech === tech}
                                        onClick={() => {
                                            setSelectedTech(tech);
                                            setCurrentPage(1);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="mb-6 text-sm text-slate-600">
                            Showing 04 of 110 Communities
                        </div>

                        {/* Communities Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {paginatedCommunities.map((community) => (
                                <CommunityCard
                                    key={community.id}
                                    community={community}
                                    onJoin={handleJoin}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <PopularNowSidebar communities={mockCommunities.slice(0, 3)} />
                    </div>
                </div>
            </div>
        </main>
    );
}
