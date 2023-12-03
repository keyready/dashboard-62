import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useEffect, useState } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { useURLParams } from 'shared/url/useSearchParams/useSearchParams';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/UI/Stack';
import { ButtonIcon } from '@radix-ui/react-icons';
import { Button } from 'primereact/button';
import { StatisticsCard } from '../StatisticsCard/StatisticsCard';
import classes from './AllocationPage.module.scss';
import { ChartCard } from '../ChartCard/ChartCard';

interface AllocationPageProps {
    className?: string;
}

const AllocationPage = memo((props: AllocationPageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'Распределение кандидатов';
    }, []);

    function gaussianRandom(mean = 0, stdev = 1) {
        const u = 1 - Math.random(); // Конвертация [0,1) в (0,1]
        const v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        // Преобразование к желаемому среднему значению и стандартному отклонению:
        return z * stdev + mean;
    }
    const numValues = 22;
    const means = Array(numValues).fill(0);
    const standardDeviations = Array(numValues).fill(1);
    const randomData = means.map((mean, i) => gaussianRandom(mean, standardDeviations[i]));

    const [groupTitle, setGroupTitle] = useState<string>('');
    const [dataset, setDataset] = useState<any>({
        label: 'привет',
        data: randomData,
        fill: false,
        borderColor: '#b6f09c',
    });

    const { getSearchParam } = useURLParams();
    useEffect(() => {
        setGroupTitle(getSearchParam('folder') || '');
    }, []);

    return (
        <Page className={classNames(classes.AllocationPage, {}, [className])}>
            <PageTitle
                breadcrumbPath={[
                    { label: 'Сравнение кандидатов', url: RoutePath.candidates },
                    { label: 'Группировка кандидатов', url: RoutePath.grouping },
                    { label: 'Распределение кандидатов' },
                ]}
                title={`Распределения кандидатов группы '${groupTitle}'`}
            />

            <HStack maxW gap="32">
                <ChartCard dataset={[dataset]} />
                <StatisticsCard
                    statistics={{
                        mathematicalExpectation: 1000,
                        variance: 1000,
                        meanSquareDeviation: 1000,
                        median: 1000,
                        asymmetryCoefficient: 1000,
                        kurtosisCoefficient: 1000,
                        differentialEntropy: 1000,
                    }}
                />
            </HStack>
            <Button
                onClick={() => {
                    if (dataset.label === 'хуй') setDataset({ ...dataset, label: 'пизда' });
                    else setDataset({ ...dataset, label: 'хуй' });
                }}
            >
                привет
            </Button>
        </Page>
    );
});

export default AllocationPage;
