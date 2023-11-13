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

    useEffect(() => {
        compareResult?.comparedCandidates.map((cand) => {
            console.log(cand.firstname);
        });
    }, [compareResult]);

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
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80],
                },
                {
                    label: label[1],
                    backgroundColor: documentStyle.getPropertyValue('--red-500'),
                    borderColor: documentStyle.getPropertyValue('--red-500'),
                    data: [34, 23, 87],
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
