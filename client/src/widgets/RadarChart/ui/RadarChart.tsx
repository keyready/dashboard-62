import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { Chart } from 'primereact/chart';
import { ComparedResult } from 'pages/DetailedComparisonPage';
import classes from './RadarChart.module.scss';

interface RadarChartProps {
    className?: string;
    compareResult?: ComparedResult;
}

export const RadarChart = memo((props: RadarChartProps) => {
    const { className, compareResult } = props;

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const colors = useMemo(
        () => ['#FCE4D6', '#FDF4E3', '#E6F0F9', '#E8F6E4', '#FDF2E8', '#E3F2FD'],
        [],
    );

    useEffect(() => {
        const data =
            {
                ...compareResult?.diagramData,
                datasets: compareResult?.diagramData?.datasets?.map((dataset, index) => ({
                    ...dataset,
                    color: colors[index],
                })),
            } || {};
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: '#fff', // цвет легенды
                    },
                },
            },
            scales: {
                r: {
                    grid: {
                        color: '#fff', // цвет сетки радара
                    },
                },
            },
            responsive: true,
        };

        setChartData(data);
        setChartOptions(options);
    }, [colors, compareResult]);

    return (
        <Chart
            className={classNames(classes.radar, {}, [className])}
            type="radar"
            data={chartData || {}}
            options={chartOptions}
        />
    );
});
