'use client';

import Link from 'next/link';
import { MessageSquare, HelpCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Community } from '@/types/dashboard';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

interface CommunityCardProps {
    community: Community;
    icon: string;
    onJoin?: (id: string) => void;
}

export function CommunityCard({ community, onJoin }: CommunityCardProps) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-subtle p-2 rounded-lg">
                    <Image className="w-5 h-5 lg:w-7 lg:h-7" width={0} height={0} alt='community.icon' src={community.icon} />
                    
                </div>
                
                <div className="flex-1">
                    <Link href={`/communities/${community.id}`}>
                        <h3 className=" font-bold text-slate-900 hover:text-secondary cursor-pointer">
                            {community.name}
                        </h3>
                    </Link>
                    <p className="text-xs text-slate-500">Created {community.createdDate}</p>
                </div>
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
            </div>

           

            {/* Description */}
            <p className="text-sm font-medium text-slate-600 mb-4 line-clamp-2">
                {community.description}
            </p>

            {/* Stats */}
            <Separator />
            <div className="flex items-center gap-10 mb-4 pt-4 ">
                <div className="flex items-center gap-2 text-sm">
                    <MessageSquare className="w-4 h-4 text-slate-500" />
                   <div className="flex flex-col">
                        <span className="text-slate-600 font-semibold">{community.messageCount.toLocaleString()}+</span>
                        <span className="text-xs text-slate-500">Messages</span>
                   </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <HelpCircle className="w-4 h-4 text-slate-500" />
                    <div className="flex flex-col">
                    <span className="text-slate-600 font-semibold">{community.questionCount.toLocaleString()}+</span>
                    <span className="text-xs text-slate-500">Questions</span>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <button
                onClick={() => onJoin?.(community.id)}
                className="w-full py-2 bg-primary text-white rounded font-medium hover:bg-slate-800 transition mt-auto"
            >
                Join Community
            </button>
        </div>
    );
}
