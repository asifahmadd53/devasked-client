'use client';

import Link from 'next/link';
import { Community } from '@/types/dashboard';
import Image from 'next/image';

interface PopularNowSidebarProps {
    communities: Community[];
}

export function PopularNowSidebar({ communities }: PopularNowSidebarProps) {
    return (
        <div className="bg-white rounded-lg border border-slate-200 p-6 sticky top-20">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Popular Now</h3>
                <Link href="#" className="text-secondary text-sm font-medium hover:underline">
                    View All →
                </Link>
            </div>

            <div className="space-y-4">
                {communities.map((community) => (
                    <Link
                        key={community.id}
                        href={`/communities/${community.id}`}
                        className="flex items-center gap-3 p-3 rounded-lg transition group bg-subtle"
                    >
                         <div className=" p-2 rounded-lg">
                                            <Image className="w-4 h-4 lg:w-6 lg:h-6" width={0} height={0} alt='community.icon' src={community.icon} />
                                            
                                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-900 group-hover:text-secondary">
                                {community.name}
                            </p>
                            <p className="text-xs text-slate-500">
                                {community.memberCount.toLocaleString()} active members
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
