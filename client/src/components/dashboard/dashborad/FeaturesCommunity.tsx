'use client';

import Link from 'next/link';

export function FeaturedCommunity() {
    return (
        <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-lg p-6 text-white">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <span className="inline-block px-3 py-1 bg-blue-600 rounded text-xs font-semibold mb-2">
                        COMMUNITY
                    </span>
                </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Distributed Systems Elite</h3>
            <p className="text-slate-300 text-sm mb-4">
                1.2k active engineers preparing for L8 Intel roles
            </p>
            <Link
                href="/communities"
                className="inline-block px-6 py-2 bg-white text-slate-900 rounded font-semibold hover:bg-slate-100 transition"
            >
                Join Now
            </Link>
        </div>
    );
}
