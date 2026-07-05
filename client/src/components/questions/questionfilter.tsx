'use client';

import { ChevronDown } from 'lucide-react';
import { CompanyType, DifficultyLevel, TechStackType } from '@/types/dashboard';
import { FilterTabs } from '../ui/filterButton';

interface QuestionFiltersProps {
    onCompanyTypeChange: (type: CompanyType) => void;
    onDifficultyChange: (difficulty: DifficultyLevel) => void;
    onTechStackChange: (tech: TechStackType) => void;
    onSortChange: (sort: string) => void;
    selectedCompanyType: CompanyType;
    selectedDifficulty: DifficultyLevel;
    selectedTechStack: TechStackType;
    selectedSort: string;
}

const companyTypes: CompanyType[] = ['All', 'Startup', 'Mid-Level', 'Big Tech/FAANG'];
const difficulties: DifficultyLevel[] = ['All', 'Easy', 'Medium', 'Hard'];
const techStacks: TechStackType[] = ['All', 'React', 'Node.js', 'AWS', 'Python'];
const sortOptions = ['Latest', 'Most Viewed', 'Most Saved'];

export function QuestionFilters({
    onCompanyTypeChange,
    onDifficultyChange,
    onTechStackChange,
    onSortChange,
    selectedCompanyType,
    selectedDifficulty,
    selectedTechStack,
    selectedSort,
}: QuestionFiltersProps) {
    return (
        <div className="space-y-6 mb-8">
            {/* Company Type Filter */}
            <div>
                <div className="flex items-center gap-8 mb-3">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                        Company Type
                    </label>
                    <FilterTabs
                        options={companyTypes}
                        value={selectedCompanyType}
                        onChange={onCompanyTypeChange}
                    />
                </div>
                
            </div>

            {/* Difficulty Level Filter */}
            <div>
                <div className="flex items-center gap-6 mb-3">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                        Difficulty Level
                    </label>
                <FilterTabs
                    options={difficulties}
                    value={selectedDifficulty}
                    onChange={onDifficultyChange}
                />
                </div>
            </div>

            {/* Tech Stack Filter */}
            <div>
                <div className="flex items-center gap-6 mb-3">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                        <span>Tech Stack:</span>
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <FilterTabs
                        options={techStacks}
                        value={selectedTechStack}
                        onChange={onTechStackChange}
                    />
                    <button className="px-3 py-1 rounded text-sm font-medium bg-transparent text-slate-600 border border-slate-300 hover:bg-slate-50 transition whitespace-nowrap flex items-center gap-1">
                        <ChevronDown className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Sort By:</span>
                </div>
                <select
                    value={selectedSort}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="px-3 py-1 rounded text-sm font-medium bg-white border border-slate-300 text-slate-900 hover:border-slate-400 transition cursor-pointer"
                >
                    {sortOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}