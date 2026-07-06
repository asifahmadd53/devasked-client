'use client';

import Link from 'next/link';
import { MessageSquare, HelpCircle } from 'lucide-react';
import { AvatarGroup } from '@/components/ui/avatar';
import { Community } from '@/types/dashboard';

interface CommunityCardProps {
    community: Community;
    onJoin?: (id: string) => void;
}

export function CommunityCard({ community, onJoin }: CommunityCardProps) {
    return (
        <div className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col">
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
                <div className="text-4xl">{community.icon}</div>
                <div className="flex-1">
                    <Link href={`/communities/${community.id}`}>
                        <h3 className="text-lg font-bold text-slate-900 hover:text-blue-600 cursor-pointer">
                            {community.name}
                        </h3>
                    </Link>
                    <p className="text-xs text-slate-500">Created {community.createdDate}</p>
                </div>
            </div>

            {/* Members avatars */}
            <div className="mb-4">
                <AvatarGroup
                    avatars={community.members.map(m => ({ src: m.avatar, alt: m.name }))}
                    max={3}
                    size="sm"
                />
                {/* <AvatarGroup>
                    {question.savedBy.slice(0, 3).map((u, i) => (
                        <Avatar key={i} size="sm">
                            <AvatarImage src={u.avatar} alt={u.name} />
                            <AvatarFallback>{u.name?.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                    ))}
                    {question.savedBy.length > 3 && (
                        <Avatar size="sm">
                            <AvatarFallback>+{question.savedBy.length - 3}</AvatarFallback>
                        </Avatar>
                    )}
                </AvatarGroup> */}
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                {community.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm">
                    <MessageSquare className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-600">{community.messageCount.toLocaleString()}+</span>
                    <span className="text-xs text-slate-500">Messages</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <HelpCircle className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-600">{community.questionCount.toLocaleString()}+</span>
                    <span className="text-xs text-slate-500">Questions</span>
                </div>
            </div>

            {/* Action Button */}
            <button
                onClick={() => onJoin?.(community.id)}
                className="w-full py-2 bg-slate-900 text-white rounded font-medium hover:bg-slate-800 transition mt-auto"
            >
                Join Community
            </button>
        </div>
    );
}
