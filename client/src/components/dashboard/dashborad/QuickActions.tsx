'use client';

import Link from 'next/link';
import { Zap, Compass, Plus, Users } from 'lucide-react';
// import { AddQuestionModal } from '@/components/modals/AddQuestionModal';

export function QuickActions() {
    return (
        <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
                {/* Take Quiz */}
                <Link
                    href="/quiz"
                    className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition group cursor-pointer"
                >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:bg-blue-200 transition">
                        <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-900 flex-1">Take Quiz</span>
                    <span className="text-blue-600 group-hover:translate-x-1 transition">→</span>
                </Link>

                {/* Browse */}
                <Link
                    href="/questions"
                    className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition group cursor-pointer"
                >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:bg-blue-200 transition">
                        <Compass className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-900 flex-1">Browse</span>
                    <span className="text-blue-600 group-hover:translate-x-1 transition">→</span>
                </Link>

                {/* Add Question - Modal */}
                {/* <AddQuestionModal>
                    <button className="w-full flex items-center gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition group cursor-pointer text-left">
                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:bg-blue-200 transition">
                            <Plus className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="font-medium text-slate-900 flex-1">Add Question</span>
                        <span className="text-blue-600 group-hover:translate-x-1 transition">→</span>
                    </button>
                </AddQuestionModal> */}

                {/* Join Community */}
                <Link
                    href="/communities"
                    className="flex items-center gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition group cursor-pointer"
                >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:bg-blue-200 transition">
                        <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-900 flex-1">Join Community</span>
                    <span className="text-blue-600 group-hover:translate-x-1 transition">→</span>
                </Link>
            </div>
        </div>
    );
}
