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
            show: false,
        },
        dataLabels: {
            enabled: true,
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                },
                dataLabels: {
                    external: {
                        show: true,
                    },
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
                breakpoint: 768,
                options: {
                    chart: {
                        type: 'donut',
                    },
                    legend: {
                        show: true,
                        position: 'bottom',
                        horizontalAlign: 'center',
                    },
                    dataLabels: {
                        enabled: true,
                        style: {
                            fontSize: '10px',
                            fontWeight: 500,
                        },
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                external: {
                                    show: false,
                                },
                            },
                        },
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

            {/* Large screens: chart with external data labels, no legend */}
            <div className="hidden md:flex justify-center items-center h-75 overflow-hidden">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width={500}
                    height={500}
                />
            </div>

            {/* Small screens: chart with bottom legend only */}
            <div className="flex md:hidden justify-center items-center overflow-hidden">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
}