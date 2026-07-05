'use client';

import Link from 'next/link';
import { Eye, Bookmark } from 'lucide-react';
import { Avatar, AvatarGroup } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Question } from '@/types/dashboard';

interface QuestionCardProps {
    question: Question;
    layout?: 'list' | 'grid';
    onBookmarkToggle?: (id: string) => void;
}

function getBadgeVariant(tag: string) {
    const tagLower = tag.toLowerCase();
    if (tagLower === 'startup') return 'startup';
    if (tagLower === 'big tech') return 'default';
    if (tagLower === 'mid-level') return 'midlevel';
    if (tagLower === 'hard') return 'destructive';
    if (tagLower === 'medium') return 'medium';
    if (tagLower === 'easy') return 'easy';
    if (tagLower === 'react') return 'react';
    if (tagLower === 'node.js') return 'nodejs';
    if (tagLower === 'aws') return 'aws';
    if (tagLower === 'python') return 'python';
    if (tagLower === 'hooks') return 'hooks';
    if (tagLower === 'frontend') return 'frontend';
    if (tagLower === 'backend') return 'backend';
    if (tagLower === 'system design') return 'systemdesign';
    return 'startup';
}

export function QuestionCard({
    question,
    layout = 'list',
    onBookmarkToggle,
}: QuestionCardProps) {
    return (
        <div
            className={`bg-white rounded-lg border border-slate-200 p-5 hover:border-slate-300 transition ${layout === 'grid' ? 'h-full flex flex-col' : ''
                }`}
        >
            {/* Header with user info and bookmark */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                    <Avatar src={question.askedBy.avatar} alt={question.askedBy.name} size="sm" />
                    <div>
                        <span className="text-xs text-slate-500">Asked by</span>
                        <Link
                            href={`/user/${question.askedBy.username}`}
                            className="text-sm font-medium text-blue-600 hover:underline block"
                        >
                            {question.askedBy.username}
                        </Link>
                    </div>
                </div>
                <button
                    onClick={() => onBookmarkToggle?.(question.id)}
                    className="text-slate-400 hover:text-blue-600 transition"
                >
                    <Bookmark
                        className="w-5 h-5"
                        fill={question.bookmarked ? '#3b82f6' : 'none'}
                        color={question.bookmarked ? '#3b82f6' : 'currentColor'}
                    />
                </button>
            </div>

            {/* Title */}
            <Link href={`/questions/${question.id}`}>
                <h3 className="text-base font-semibold text-slate-900 hover:text-blue-600 mb-2 line-clamp-2 cursor-pointer">
                    {question.title}
                </h3>
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
                {question.tags.map((tag) => (
                    <Badge key={tag} variant={getBadgeVariant(tag)}>
                        {tag}
                    </Badge>
                ))}
            </div>

            {/* Metadata */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-3">
                    <span>{question.createdAt}</span>
                    <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {question.views}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {question.savedBy.length > 0 && (
                        <AvatarGroup avatars={question.savedBy.map(u => ({
                            src: u.avatar,
                            alt: u.name
                        }))} max={2} size="sm" />
                    )}
                    <span className="font-medium text-slate-700">{question.saves} Devs Saved</span>
                </div>
            </div>

            {/* View Details Button */}
            <Link
                href={`/questions/${question.id}`}
                className="mt-3 w-full py-2 text-center bg-slate-900 text-white rounded font-medium hover:bg-slate-800 transition"
            >
                View Details
            </Link>
        </div>
    );
}
