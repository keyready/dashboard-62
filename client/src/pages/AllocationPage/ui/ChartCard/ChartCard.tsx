import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect, useMemo, useState } from 'react';
import { HStack } from 'shared/UI/Stack';
import { Chart } from 'primereact/chart';
import classes from './ChartCard.module.scss';

interface ChartCardProps {
    className?: string;
    dataset: any;
}

export const ChartCard = memo((props: ChartCardProps) => {
    const { className, dataset } = props;

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const labels = useMemo(
        () => Array.from({ length: dataset[0].data?.length || 10 }, (_, i) => (i + 1).toString()),
        [dataset],
    );

    useEffect(() => {
        const data = {
            labels,
            datasets: dataset,
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: '#b6f09c',
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: '#686B6E',
                    },
                    grid: {
                        color: '#686B6E',
                    },
                },
                y: {
                    ticks: {
                        color: '#686B6E',
                    },
                    grid: {
                        color: '#686B6E',
                    },
                },
            },
        };

        setChartData(data);
        setChartOptions(options);
    }, [dataset]);

    return (
        <HStack maxW className={classNames(classes.ChartCard, {}, [className])}>
            <Chart style={{ width: '100%' }} type="line" data={chartData}
options={chartOptions} />
        </HStack>
    );
});
