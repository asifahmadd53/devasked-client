'use client';

import { useState, useMemo } from 'react';
import { mockCommunities } from '@/lib/mock-data';
import { FilterTabs } from '@/components/dashboard/questions/filterTabs';
import { CommunityCard } from '@/components/dashboard/communities/communityCard';
import { Pagination } from '@/components/dashboard/questions/pagination';
import { PopularNowSidebar } from '@/components/dashboard/communities/popularNowSideBar';
import { TechFilter } from '@/components/dashboard/questions/techFilter';
import { TechStackType } from '@/types/dashboard';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const ITEMS_PER_PAGE = 4;

export default function CommunitiesPage() {
    const [selectedTech, setSelectedTech] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [joinedCommunities, setJoinedCommunities] = useState<string[]>([]);
    const [selectedTechStack, setSelectedTechStack] = useState<TechStackType>('All');
    const [selectedSort, setSelectedSort] = useState('Latest');
    const techStacks = ['All', 'React', 'Node.js', 'AWS', 'Python', 'System Design'];
    const sortOptions = ['Latest', 'Most Viewed', 'Most Saved'];
    
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
                       <div>
                                       <div className="flex items-center gap-6 mb-3">
                                           <label className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                                               <span >Tech Stack:</span>
                                           </label>
                                       </div>
                                       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                                           <TechFilter
                                               options={techStacks}
                                               value={selectedTechStack}
                                               onChange={onTechStackChange}
                                           />
                                           {/* <button className="px-3 py-1 rounded text-sm font-medium bg-transparent text-slate-600 border border-slate-300 hover:bg-slate-50 transition whitespace-nowrap flex items-center gap-1">
                                               <ChevronDown className="w-4 h-4" />
                                           </button> */}
                       
                                           <div className="flex items-center lg:gap-4 justify-between">
                                               <div className="flex items-center gap-2">
                                                   <span className="text-sm font-semibold text-primary/80 tracking-wider whitespace-nowrap">Sort By:</span>
                                               </div>
                       
                       
                                               <div>
                                                   {/* <Select value={selectedSort} onValueChange={(value) => value && onSortChange(value)} aria-label="Select framework">
                                                       <SelectTrigger>
                                                           <SelectValue  placeholder="Select framework" />
                                                       </SelectTrigger>
                                                       <SelectPopup className='rounded-xs' alignItemWithTrigger={false}>
                                                           {sortOptions.map((option) => (
                                                               <SelectItem key={option} value={option}>
                                                                   {option}
                                                               </SelectItem>
                                                           ))}
                                                       </SelectPopup>
                                                   </Select> */}
                       
                                                   <Select value={selectedSort} onValueChange={(value) => value && onSortChange(value)} aria-label="Select framework">
                                                       <SelectTrigger className="w-45">
                                                           <SelectValue placeholder="Select framework" />
                                                       </SelectTrigger>
                                                       <SelectContent>
                                                           <SelectGroup>
                                                               {sortOptions.map((option) => (
                                                                   <SelectItem className='w-45' key={option} value={option}>
                                                                       {option}
                                                                   </SelectItem>
                                                               ))}
                                                           </SelectGroup>
                                                       </SelectContent>
                                                   </Select>
                                               </div>
                       
                       
                                           </div>
                       
                                       </div>
                       
                                   </div>

                        {/* Results Count */}
                        <div className="my-4 text-sm text-slate-600">
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
