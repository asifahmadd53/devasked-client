'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 7;
        const halfVisible = Math.floor(maxVisible / 2);

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage > halfVisible + 1) {
                pages.push('...');
            }

            const start = Math.max(2, currentPage - halfVisible);
            const end = Math.min(totalPages - 1, currentPage + halfVisible);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - halfVisible - 1) {
                pages.push('...');
            }

            pages.push(totalPages);
        }

        return pages;
    };

    const pages = getPageNumbers();

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>

            {pages.map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    disabled={page === '...'}
                    className={`w-8 h-8 rounded transition ${page === currentPage
                            ? 'bg-slate-900 text-white'
                            : page === '...'
                                ? 'cursor-default'
                                : 'border border-slate-200 hover:bg-slate-50'
                        }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    );
}
