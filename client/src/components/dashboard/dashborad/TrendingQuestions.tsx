
import Link from 'next/link';
import { Eye, MessageSquare } from 'lucide-react';
import { Question } from '@/types/dashboard';
import { Badge } from '@/components/ui/badge';

interface TrendingQuestionsProps {
    questions: Question[];
}

function getBadgeVariant(tag: string) {
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

export function TrendingQuestions({ questions }: TrendingQuestionsProps) {
    return (
        <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Trending Questions</h3>
                <Link href="/questions" className="text-blue-600 text-sm font-medium hover:underline">
                    View All →
                </Link>
            </div>

            <div className="space-y-4">
                {questions.map((question) => (
                    <div
                        key={question.id}
                        className="border border-slate-100 rounded-lg p-4 hover:border-slate-200 transition group"
                    >
                        {/* Title */}
                        <Link href={`/questions/${question.id}`}>
                            <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 mb-2 text-sm line-clamp-2 cursor-pointer">
                                {question.title}
                            </h4>
                        </Link>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-1 mb-3">
                            {question.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant={getBadgeVariant(tag)}>
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        {/* Metadata */}
                        <div className="flex items-center justify-between text-xs text-slate-600">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4" />
                                    {question.views}
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageSquare className="w-4 h-4" />
                                    {question.saves}
                                </div>
                            </div>
                            <Link
                                href={`/questions/${question.id}`}
                                className="text-blue-600 hover:underline font-medium"
                            >
                                View Details →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
