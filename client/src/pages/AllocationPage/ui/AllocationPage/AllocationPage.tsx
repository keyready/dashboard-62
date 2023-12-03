import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useEffect, useState } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { useURLParams } from 'shared/url/useSearchParams/useSearchParams';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/UI/Stack';
import { useSubjects } from 'pages/CreateCandidatePage';
import { Text } from 'shared/UI/Text';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { Subject } from 'entities/Subject';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { fetchDataset } from '../../model/services/fetchDataset';
import { AllocationPageReducer } from '../../model/slice/AllocationPageSlice';
import { StatisticsCard } from '../StatisticsCard/StatisticsCard';
import classes from './AllocationPage.module.scss';
import { ChartCard } from '../ChartCard/ChartCard';
import { getDataset } from '../../model/selector/allocationPageSelectors';
import { Dataset } from '../../model/types/Dataset';

interface AllocationPageProps {
    className?: string;
}

const AllocationPage = memo((props: AllocationPageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'Распределение кандидатов';
    }, []);

    const [groupTitle, setGroupTitle] = useState<string>('');
    const [localDataset, setLocalDataset] = useState<any>({
        data: [],
        statistics: {
            mathematicalExpectation: 100,
            variance: 100,
            meanSquareDeviation: 100,
            median: 100,
            asymmetryCoefficient: 100,
            kurtosisCoefficient: 100,
            differentialEntropy: 100,
        },
    });
    const [allocationType, setAllocationType] = useState<Subject>({
        title: 'По среднему баллу',
        id: -1,
    });

    const { data: subjects, isLoading: isSubjectsLoading } = useSubjects();
    const dataset = useSelector(getDataset);
    const dispatch = useAppDispatch();

    const { getSearchParam, addSearchParams } = useURLParams();
    useEffect(() => {
        setGroupTitle(getSearchParam('folder') || '');
    }, []);

    useEffect(() => {
        if (allocationType.id !== -1) dispatch(fetchDataset(allocationType.title));
    }, [allocationType, dispatch]);

    useEffect(() => {
        setLocalDataset({
            data: {
                label: allocationType.title,
                data: dataset?.data,
                fill: false,
                borderColor: '#b6f09c',
            },
            statistics: dataset?.statistics,
        });

        addSearchParams({ allocationType: allocationType.title });
    }, [allocationType, dataset]);

    return (
        <DynamicModuleLoader reducers={{ allocationPage: AllocationPageReducer }}>
            <Page className={classNames(classes.AllocationPage, {}, [className])}>
                <PageTitle
                    breadcrumbPath={[
                        { label: 'Сравнение кандидатов', url: RoutePath.candidates },
                        { label: 'Группировка кандидатов', url: RoutePath.grouping },
                        { label: 'Распределение кандидатов' },
                    ]}
                    title={`Распределения кандидатов группы '${groupTitle}'`}
                />

                <Divider align="left" className={classes.divider}>
                    <Text
                        className={classes.dividerTitle}
                        align="left"
                        text="Выберите, по каким данным строить распределение"
                        size="small"
                    />
                </Divider>
                <Dropdown
                    optionLabel="title"
                    options={[{ title: 'По среднему баллу', id: -1 }, ...(subjects || [])]}
                    value={allocationType}
                    onChange={(event) => setAllocationType(event.value)}
                    emptyMessage={<p>Ничего не найдено</p>}
                    placeholder="Выберите параметр группировки"
                    required
                />

                <HStack maxW gap="32">
                    {localDataset?.data?.length || localDataset?.statistics ? (
                        <>
                            <ChartCard dataset={[localDataset?.data]} />
                            <StatisticsCard statistics={localDataset?.statistics} />
                        </>
                    ) : (
                        <h2>Пока ничего нет</h2>
                    )}
                </HStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default AllocationPage;
