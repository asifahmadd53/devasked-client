'use client';

import { useState, useMemo } from 'react';
// import { Breadcrumb } from '@/components/layout/Breadcrumb';

// import { AddQuestionModal } from '@/components/modals/AddQuestionModal';
import { mockQuestions } from '@/lib/mock-data';
import { CompanyType, DifficultyLevel, TechStackType, Question } from '@/types/dashboard';
import { ContentLayout } from '@/components/layout/DashboardContent';
import { QuestionFilters } from '@/components/questions/questionfilter';
import { QuestionCard } from '@/components/questions/questioncard';
import { Pagination } from '@/components/questions/pagination';

const ITEMS_PER_PAGE = 11;

export default function QuestionsPage() {
    const [selectedCompanyType, setSelectedCompanyType] = useState<CompanyType>('All');
    const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>('All');
    const [selectedTechStack, setSelectedTechStack] = useState<TechStackType>('All');
    const [selectedSort, setSelectedSort] = useState('Latest');
    const [currentPage, setCurrentPage] = useState(1);
    const [bookmarkedQuestions, setBookmarkedQuestions] = useState(
        mockQuestions.filter(q => q.bookmarked).map(q => q.id)
    );

    const filteredQuestions = useMemo(() => {
        let filtered = [...mockQuestions];

        // Filter by company type
        if (selectedCompanyType !== 'All') {
            filtered = filtered.filter(q => q.companyType === selectedCompanyType);
        }

        // Filter by difficulty
        if (selectedDifficulty !== 'All') {
            filtered = filtered.filter(q => q.difficulty === selectedDifficulty);
        }

        // Filter by tech stack
        if (selectedTechStack !== 'All') {
            filtered = filtered.filter(q => q.techStack.includes(selectedTechStack));
        }

        // Sort
        if (selectedSort === 'Latest') {
            filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        } else if (selectedSort === 'Most Viewed') {
            filtered.sort((a, b) => b.views - a.views);
        } else if (selectedSort === 'Most Saved') {
            filtered.sort((a, b) => b.saves - a.saves);
        }

        return filtered;
    }, [selectedCompanyType, selectedDifficulty, selectedTechStack, selectedSort]);

    const paginatedQuestions = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return filteredQuestions.slice(start, end);
    }, [filteredQuestions, currentPage]);

    const totalPages = Math.ceil(filteredQuestions.length / ITEMS_PER_PAGE);

    const handleBookmarkToggle = (id: string) => {
        setBookmarkedQuestions(prev =>
            prev.includes(id) ? prev.filter(qId => qId !== id) : [...prev, id]
        );
    };

    const handleQuestionAdded = (questionData: any) => {
        console.log('[v0] Question added:', questionData);
    };

    return (
        <ContentLayout title="Questions">
        <main className="min-h-screen">
            <div className="max-w-6xl mx-auto ">
                {/* Breadcrumb */}
                {/* <Breadcrumb items={[{ label: 'Dashboard', href: '/' }, { label: 'Questions' }]} /> */}

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Questions</h1>
                        <p className="text-slate-600 mt-1">View and browse questions from different tech stacks</p>
                    </div>
                    {/* <AddQuestionModal onQuestionAdded={handleQuestionAdded}>
                        <button className="px-4 py-2 bg-slate-900 text-white rounded font-medium hover:bg-slate-800 transition">
                            + New Question
                        </button>
                    </AddQuestionModal> */}
                </div>

                {/* Filters */}
                <QuestionFilters
                    selectedCompanyType={selectedCompanyType}
                    selectedDifficulty={selectedDifficulty}
                    selectedTechStack={selectedTechStack}
                    selectedSort={selectedSort}
                    onCompanyTypeChange={setSelectedCompanyType}
                    onDifficultyChange={setSelectedDifficulty}
                    onTechStackChange={setSelectedTechStack}
                    onSortChange={setSelectedSort}
                />

                {/* Results Count */}
                <div className="mb-6 text-sm text-slate-600">
                    Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} of {filteredQuestions.length} Questions
                </div>

                {/* Question List */}
                <div className="space-y-4 mb-8">
                    {paginatedQuestions.map((question) => (
                        <QuestionCard
                            key={question.id}
                            question={{
                                ...question,
                                bookmarked: bookmarkedQuestions.includes(question.id),
                            }}
                            onBookmarkToggle={handleBookmarkToggle}
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
        </main>
        </ContentLayout>
    );
}
