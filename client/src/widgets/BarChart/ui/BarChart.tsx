import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { ComparedResult } from 'pages/DetailedComparisonPage';
import classes from './BarChart.module.scss';

interface BarChartProps {
    className?: string;
    label: string[];
    compareResult?: ComparedResult;
}

export const BarChart = memo((props: BarChartProps) => {
    const { className, label, compareResult } = props;

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = '#fff';
        const textColorSecondary = '#8d8c8c';
        const data = {
            labels: compareResult?.comparedCandidates.map((cand) => cand.firstname),
            datasets: [
                {
                    label: label[0],
                    backgroundColor: '#82DBF7',
                    borderColor: '#00FAEB',
                    data: compareResult?.comparedCandidates.map((cand) => cand.taskOverlap),
                },
                {
                    label: label[1],
                    backgroundColor: '#00FAEB',
                    borderColor: '#00FAEB',
                    data: compareResult?.comparedCandidates.map((cand) => cand.hobbyOverlap),
                },
            ],
        };
        const options = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500,
                        },
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: textColorSecondary,
                        drawBorder: false,
                    },
                },
            },
        };

        setChartData(data);
        setChartOptions(options);
    }, [compareResult?.comparedCandidates, label]);

    return (
        <Chart
            className={classNames(classes.BarChart, {}, [className])}
            type="bar"
            data={chartData}
            options={chartOptions}
        />
    );
});
