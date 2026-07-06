'use client';

import Link from 'next/link';
import { Eye, Bookmark } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Question } from '@/types/dashboard';
import { Separator } from '../../ui/separator';
import { Button } from '../../ui/button';

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
                    <Avatar>
                        <AvatarImage src="https://originui.com/avatar-80-07.jpg" alt="Kelly King" />
                        <AvatarFallback>KK</AvatarFallback>
                    </Avatar>
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
                    className="text-slate-400 hover:text-secondary transition"
                >
                    <Bookmark
                        className="w-5 h-5"
                        fill={question.bookmarked ? '#68B2F1' : 'none'}
                        color={question.bookmarked ? '#68B2F1' : 'currentColor'}
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
                    <Badge className='p-2 py-3' key={tag} variant={getBadgeVariant(tag)}>
                        {tag}
                    </Badge>
                ))}
            </div>

            {/* Metadata */}
            <Separator />
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mt-auto pt-3 text-xs text-slate-600">
                <div className="flex items-center pl-2 gap-3">
                    <span>{question.createdAt}</span>
                    <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {question.views}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">

                    <div className="flex items-center rounded-full p-0.5 gap-1.5 border border-border shadow-sm shadow-black/5">
                        <div className="flex -space-x-3">
                            <Avatar className="size-7">
                                <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" alt="@reui" className="border-2 border-background hover:z-10" />
                                <AvatarFallback>CH</AvatarFallback>
                            </Avatar>
                            <Avatar className="size-7">
                                <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" alt="@reui" className="border-2 border-background hover:z-10" />
                                <AvatarFallback>CH</AvatarFallback>
                            </Avatar>
                            <Avatar className="size-7">
                                <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" alt="@reui" className="border-2 border-background hover:z-10" />
                                <AvatarFallback>CH</AvatarFallback>
                            </Avatar>
                            <Avatar className="size-7">
                                <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" alt="@reui" className="border-2 border-background hover:z-10" />
                                <AvatarFallback>CH</AvatarFallback>
                            </Avatar>
                        </div>


                        <p className="text-xs text-muted-foreground me-1.5">
                            <span className="font-semibold text-foreground">18 Devs Saved</span>.
                        </p>


                    </div>
                    <Button>
                        <Link href={`/questions/${question.id}`} className="text-sm font-medium  hover:underline ">
                            View Details
                        </Link>
                    </Button>
                </div>

            </div>

            {/* View Details Button */}

        </div>
    );
}
