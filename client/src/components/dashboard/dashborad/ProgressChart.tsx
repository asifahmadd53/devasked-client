'use client';

import dynamic from 'next/dynamic';
import { QuizProgress } from '@/types/dashboard';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

interface ProgressChartProps {
    data: QuizProgress[];
}

export function ProgressChart({ data }: ProgressChartProps) {
    const series = data.map((item) => item.percentage);
    

    const options: ApexOptions = {
        chart: {
            type: 'donut',
            toolbar: {
                show: false,
            },
        },
        labels: data.map((item) => item.topic),
        colors: data.map((item) => item.color),
        legend: {
            position: 'bottom',
            fontSize: '14px',
            formatter: (seriesName, opts) => {
                const value = opts?.w.globals.series[opts.seriesIndex] ?? "";
                return `${seriesName} ${value}%`;
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
            colors: ['#fff'],
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '75%',
                },
            },
        },
        tooltip: {
            y: {
                formatter: (value) => `${value}%`,
            },
        },
        responsive: [
            {
                breakpoint: 640,
                options: {
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };

    return (
        <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="mb-6 text-lg font-semibold text-slate-900">
                Progress based on Quiz Score
            </h3>

            <Chart
                options={options}
                series={series}
                type="donut"
                height={300}
            />
        </div>
    );
}