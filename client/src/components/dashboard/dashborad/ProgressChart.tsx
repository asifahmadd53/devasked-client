'use client';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { QuizProgress } from '@/types/dashboard';

interface ProgressChartProps {
    data: QuizProgress[];
}

export function ProgressChart({ data }: ProgressChartProps) {
    const chartData = data.map((item) => ({
        name: item.topic,
        value: item.percentage,
        color: item.color,
    }));

    return (
        <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Progress based on Quiz Score</h3>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Legend
                        verticalAlign="bottom"
                        height={36}
                        formatter={(value, entry) => {
                            const item = entry.payload;
                            return `${item.name} ${item.value}%`;
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
