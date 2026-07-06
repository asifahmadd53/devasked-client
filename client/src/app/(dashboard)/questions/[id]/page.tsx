'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronUp, Eye, Bookmark } from 'lucide-react';

import { Avatar, AvatarGroup } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { mockQuestions } from '@/lib/mock-data';

interface QuestionDetailPageProps {
    params: Promise<{ id: string }>;
}

function getBadgeVariant(tag: string): any {
    const tagLower = tag.toLowerCase();
    if (tagLower === 'startup') return 'startup';
    if (tagLower === 'big tech') return 'bigtech';
    if (tagLower === 'hard') return 'hard';
    if (tagLower === 'medium') return 'medium';
    if (tagLower === 'easy') return 'easy';
    if (tagLower === 'react') return 'react';
    if (tagLower === 'node.js') return 'nodejs';
    if (tagLower === 'aws') return 'aws';
    if (tagLower === 'python') return 'python';
    if (tagLower === 'hooks') return 'hooks';
    if (tagLower === 'backend') return 'backend';
    if (tagLower === 'system design') return 'systemdesign';
    return 'startup';
}

export default function QuestionDetailPage({ params }: QuestionDetailPageProps) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    // In a real app, we'd use params.id to fetch the specific question
    // For now, we'll just get the first question
    const question = mockQuestions[0];

    if (!question) {
        return (
            <main className="bg-slate-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <p className="text-slate-600">Question not found</p>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back link */}
                <Link href="/questions" className="text-blue-600 hover:underline text-sm font-medium mb-6 inline-flex items-center gap-1">
                    ← Back to Questions
                </Link>

                {/* Main card */}
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                    {/* Header with user and bookmark */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <Avatar src={question.askedBy.avatar} alt={question.askedBy.name} size="md" />
                            <div>
                                <span className="text-xs text-slate-500">Asked by</span>
                                <Link href={`/user/${question.askedBy.username}`} className="font-semibold text-blue-600 hover:underline block">
                                    {question.askedBy.username}
                                </Link>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsBookmarked(!isBookmarked)}
                            className="text-slate-400 hover:text-blue-600 transition"
                        >
                            <Bookmark
                                className="w-6 h-6"
                                fill={isBookmarked ? '#3b82f6' : 'none'}
                                color={isBookmarked ? '#3b82f6' : 'currentColor'}
                            />
                        </button>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-bold text-slate-900 mb-4">{question.title}</h1>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {question.tags.map((tag) => (
                            <Badge key={tag} variant={getBadgeVariant(tag)}>
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    {/* Question Description */}
                    <div className="prose prose-sm max-w-none mb-6">
                        <h2 className="text-lg font-semibold text-slate-900 mt-0">Question Description</h2>
                        <p className="text-slate-700 leading-relaxed">{question.description}</p>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center justify-between py-4 border-t border-b border-slate-100">
                        <div className="flex items-center gap-6 text-sm text-slate-600">
                            <span>{question.createdAt}</span>
                            <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                {question.views}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <AvatarGroup
                                avatars={question.savedBy.map(u => ({ src: u.avatar, alt: u.name }))}
                                max={3}
                                size="sm"
                            />
                            <span className="text-sm font-medium text-slate-700">{question.saves} Devs Saved</span>
                        </div>
                    </div>

                    {/* View Answer Section */}
                    <button
                        onClick={() => setShowAnswer(!showAnswer)}
                        className="w-full mt-6 py-3 px-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-semibold transition"
                    >
                        <span>View Answer</span>
                        <ChevronUp
                            className={`w-5 h-5 transition-transform ${showAnswer ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {/* Answer Section */}
                    {showAnswer && (
                        <div className="mt-6 pt-6 border-t border-slate-200">
                            <h3 className="text-lg font-semibold text-slate-900 mb-4">Answer</h3>
                            <div className="prose prose-sm max-w-none text-slate-700">
                                <p>
                                    To implement a debouncing mechanism in React, you can create a custom hook that wraps a function and delays its execution. Here&apos;s how you can do it:
                                </p>
                                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-4">
                                    <code>{`function useDebounce(callback, delay) {
  const timeoutRef = useRef(null);

  const debouncedCallback = useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
}`}</code>
                                </pre>
                                <p>
                                    This hook stores a reference to the timeout and clears it whenever a new call is made. This ensures that the callback is only executed after the specified delay has passed since the last call.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
