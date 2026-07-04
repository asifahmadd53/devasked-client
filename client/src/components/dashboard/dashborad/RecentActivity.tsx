'use client';

import Link from 'next/link';
import { Award, Plus, Users } from 'lucide-react';
// import { Avatar } from '@/components/common/Avatar';
import { Activity } from '@/types/dashboard';

interface RecentActivityProps {
    activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
    const getIcon = (type: string) => {
        switch (type) {
            case 'quiz_completed':
                return <Award className="w-5 h-5 text-amber-600" />;
            case 'question_added':
                return <Plus className="w-5 h-5 text-blue-600" />;
            case 'community_joined':
                return <Users className="w-5 h-5 text-green-600" />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
                <Link href="/activity" className="text-blue-600 text-sm font-medium hover:underline">
                    View All →
                </Link>
            </div>

            <div className="space-y-4">
                {activities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                            {getIcon(activity.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                {activity.user && (
                                    <>
                                        {/* <Avatar src={activity.user.avatar} alt={activity.user.name} size="sm" /> */}
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">
                                                <Link href={`/user/${activity.user.username}`} className="text-blue-600 hover:underline">
                                                    {activity.user.name}
                                                </Link>
                                                {' '}
                                                <span className="text-slate-600">{activity.description}</span>
                                            </p>
                                        </div>
                                    </>
                                )}
                                {!activity.user && (
                                    <p className="text-sm font-medium text-slate-900">{activity.description}</p>
                                )}
                            </div>
                            {activity.score && (
                                <p className="text-xs text-amber-600 mt-1">
                                    Score: {activity.score}% • Earned {activity.earnedXP} XP
                                </p>
                            )}
                            <p className="text-xs text-slate-500 mt-1">{activity.timestamp}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Link
                href="/activity"
                className="block w-full mt-4 py-2 text-center bg-blue-50 text-blue-600 rounded font-medium hover:bg-blue-100 transition"
            >
                View Full History
            </Link>
        </div>
    );
}
