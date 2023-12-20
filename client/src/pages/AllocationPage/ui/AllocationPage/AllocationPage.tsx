import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useEffect, useMemo, useState } from 'react';
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
import { Skeleton } from 'primereact/skeleton';
import { fetchDataset } from '../../model/services/fetchDataset';
import { AllocationPageReducer } from '../../model/slice/AllocationPageSlice';
import { StatisticsCard } from '../StatisticsCard/StatisticsCard';
import classes from './AllocationPage.module.scss';
import { ChartCard } from '../ChartCard/ChartCard';
import { getDataset, getDatasetIsLoading } from '../../model/selector/allocationPageSelectors';

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
    const [allocationType, setAllocationType] = useState<Partial<Subject>>({});
    const [allocationRealType, setAllocationRealType] = useState<string>('Нормальное');

    const allocationRealTypes = useMemo(
        () => [
            { id: 1, value: 'Нормальное' },
            { id: 2, value: 'Равномерное' },
            { id: 3, value: 'Экспоненциальное' },
            { id: 4, value: 'По Гауссу' },
        ],
        [],
    );

    const { data: subjects, isLoading: isSubjectsLoading } = useSubjects();
    const subjectsFromLS = useMemo<Subject[]>(() => {
        const sfls = localStorage.getItem('subjects');
        if (sfls) {
            return JSON.parse(sfls);
        }
        return [];
    }, []);
    const dataset = useSelector(getDataset);
    const isDatasetLoading = useSelector(getDatasetIsLoading);
    const dispatch = useAppDispatch();

    const { getSearchParam, addSearchParams } = useURLParams();
    useEffect(() => {
        setGroupTitle(getSearchParam('folder') || '');

        if (subjectsFromLS.length) {
            if (subjectsFromLS.find((obj) => obj.title === getSearchParam('allocationType'))) {
                setAllocationType({
                    title: getSearchParam('allocationType') || 'По среднему баллу',
                    id: Number(getSearchParam('allocationTypeId')) || -1,
                });
                setAllocationRealType(getSearchParam('allocationRealType') || 'Нормальное');
            }
        }
    }, [subjectsFromLS]);

    useEffect(() => {
        if (allocationType.title && allocationRealType) {
            dispatch(
                fetchDataset({
                    allocationData: allocationType.title,
                    allocationType: allocationRealType,
                }),
            );
        }
    }, [allocationRealType, allocationType, dispatch]);

    useEffect(() => {
        if (subjects?.length) localStorage.setItem('subjects', JSON.stringify(subjects));
    }, [subjects]);

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

        if (allocationType.id && allocationType.title) {
            addSearchParams({ allocationType: allocationType.title });
            addSearchParams({ allocationTypeId: allocationType?.id.toString() });
        }
        if (allocationRealType) {
            addSearchParams({ allocationRealType });
        }
    }, [allocationRealType, allocationType, dataset]);

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
                <HStack gap="32">
                    <Dropdown
                        filter
                        optionLabel="title"
                        options={[{ title: 'По среднему баллу', id: -1 }, ...(subjects || [])]}
                        value={allocationType}
                        onChange={(event) => setAllocationType(event.value)}
                        emptyMessage={<p>Ничего не найдено</p>}
                        placeholder="Выберите, по каким данным строить распределение"
                        required
                    />
                    <Dropdown
                        optionLabel="value"
                        options={allocationRealTypes}
                        value={allocationRealType}
                        onChange={(event) => setAllocationRealType(event.value)}
                        placeholder="Выберите, какое распределение строить"
                        required
                    />
                </HStack>

                {isSubjectsLoading ||
                    (isDatasetLoading && (
                        <HStack maxW className={classes.skeleton} gap="32">
                            <Skeleton width="100%" height="400px" borderRadius="10px" />
                            <Skeleton width="100%" height="400px" borderRadius="10px" />
                        </HStack>
                    ))}
                {!isSubjectsLoading && !isDatasetLoading && (
                    <HStack maxW gap="32" className={classes.skeleton}>
                        {localDataset?.data?.length || localDataset?.statistics ? (
                            <>
                                <ChartCard dataset={[localDataset?.data]} />
                                <StatisticsCard statistics={localDataset?.statistics} />
                            </>
                        ) : (
                            <HStack maxW justify="center">
                                <Text title="Выберите, по каким данным строить распределение" />
                            </HStack>
                        )}
                    </HStack>
                )}
            </Page>
        </DynamicModuleLoader>
    );
});

export default AllocationPage;
