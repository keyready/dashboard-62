import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useCallback, useEffect, useState } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Checkbox } from 'primereact/checkbox';
import { Table } from 'shared/UI/Table';
import { HStack, VStack } from 'shared/UI/Stack';
import { Button } from 'shared/UI/Button';
import { Card } from 'shared/UI/Card';
import { Text } from 'shared/UI/Text';
import { Disclosure } from 'shared/UI/Disclosure';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { useNavigate } from 'react-router-dom';
import { useURLParams } from 'shared/url/useSearchParams/useSearchParams';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Icon } from 'shared/UI/Icon/Icon';
import ChevronIcon from 'shared/assests/icons/chevron-down.svg';
import { Input } from 'shared/UI/Input';
import { Candidate } from 'entities/Candidate';
import { Skeleton } from 'primereact/skeleton';
import { Paginator } from 'widgets/Paginator';
import { useSelector } from 'react-redux';
import { getTotalCandidates } from 'pages/CandidatesPage/model/selectors/candidatesPageSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchTotalCandidates } from 'pages/CandidatesPage';
import { Modal } from 'shared/UI/Modal';
import { CandidatesFilterModal, FilterOptions } from 'widgets/CandidatesFilterModal';
import { QueryProps, useCandidates } from '../../api/fetchCandidatesApi';
import { CandidatesPageReducer } from '../../model/slice/CandidatesPageSlice';
import classes from './CandidatesPage.module.scss';

interface CandidatesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    candidates: CandidatesPageReducer,
};

const CandidatesPage = memo((props: CandidatesPageProps) => {
    const { className } = props;

    const { addSearchParams, deleteSearchParams, getSearchParams } = useURLParams();

    const [selected, setSelected] = useState<Candidate[]>([]);
    const [selectedIdsFromUrl, setSelectedIdsFromUrl] = useState<number[]>([]);
    const [taskValue, setTaskValue] = useState<string>('');
    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [filterOptions, setFilterOptions] = useState<FilterOptions>({});

    const navigate = useNavigate();
    const totalCandidates = useSelector(getTotalCandidates);
    const dispatch = useAppDispatch();

    const { data: candidates, isLoading: isCandidatesLoading } = useCandidates({ page, limit });

    useEffect(() => {
        dispatch(fetchTotalCandidates());

        const params = getSearchParams();

        if (params?.length !== 2) {
            deleteSearchParams('selected');
            deleteSearchParams('task');
            return;
        }

        const urlTask = params[0]?.param === 'task' ? params[0]?.value : params[1]?.value;
        const urlSelected = params[1]?.param === 'selected' ? params[1]?.value : params[0]?.value;

        if (params?.length) {
            setSelectedIdsFromUrl(urlSelected.split(',').map(Number));
            setTaskValue(urlTask);
        }
    }, [dispatch]);

    useEffect(() => {
        if (selectedIdsFromUrl.length && candidates) {
            setSelected(candidates.filter((user) => selectedIdsFromUrl.includes(user.id)));
        }
    }, [candidates, selectedIdsFromUrl]);

    useEffect(() => {
        if (selected.length) {
            addSearchParams({
                selected: selected.map((user) => user.id.toString()).join(','),
            });
        }
    }, [selected]);

    const handleComparisonClick = useCallback(() => {
        if (taskValue.length >= 10 && selected.length >= 2 && selected.length <= 4)
            navigate(
                `${RoutePath.detailedcomparison}?selected=${selected
                    .map((user) => user.id.toString())
                    .join(',')}&task=${taskValue}`,
            );
    }, [navigate, selected, taskValue]);

    useEffect(() => {
        if (taskValue) addSearchParams({ task: taskValue });
    }, [taskValue]);

    const handleRowDelete = useCallback((candForDelete: Candidate) => {
        setSelected((prevState) => prevState.filter((cand) => cand.id !== candForDelete.id));
    }, []);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (
                event.key === 'Enter' &&
                taskValue.length >= 10 &&
                selected.length >= 2 &&
                selected.length <= 6
            ) {
                navigate(
                    `${RoutePath.detailedcomparison}?selected=${selected
                        .map((user) => user.id.toString())
                        .join(',')}&task=${taskValue}`,
                );
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [navigate, selected, taskValue]);

    if (isCandidatesLoading) {
        return (
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
                <Page className={classNames(classes.CandidatesPage, {}, [className])}>
                    <VStack maxW gap="32">
                        <Skeleton width="45%" height="85px" />

                        <HStack
                            className={classes.skeletonWrapper}
                            gap="16"
                            maxW
                            align="start"
                            justify="between"
                        >
                            <VStack gap="16" className={classes.skeletonList}>
                                {new Array(10).fill(0).map((_, index) => (
                                    <HStack
                                        className={classes.skeletonCard}
                                        maxW
                                        gap="8"
                                        key={index}
                                    >
                                        <Skeleton shape="circle" size="75px" />
                                        <VStack maxW align="start">
                                            <Skeleton width="100%" height="40px" />
                                            <Skeleton width="60%" height="20px" />
                                            <Skeleton width="60%" height="20px" />
                                        </VStack>
                                    </HStack>
                                ))}
                            </VStack>
                            <Skeleton className={classes.skeletonTable} width="60%" height="30vh" />
                        </HStack>
                    </VStack>
                </Page>
            </DynamicModuleLoader>
        );
    }

    if (!candidates?.length && !isCandidatesLoading) {
        return (
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
                <Page className={classNames(classes.CandidatesPage, {}, [className])}>
                    <h2>ничего не нашли</h2>
                </Page>
            </DynamicModuleLoader>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(classes.CandidatesPage, {}, [className])}>
                <CandidatesFilterModal
                    filterOptions={filterOptions}
                    setIsOpen={setIsModalOpened}
                    isOpen={isModalOpened}
                />

                <HStack justify="start">
                    <Card className={classes.card}>
                        <Text
                            align="left"
                            size="large"
                            className={classes.textBlock}
                            title="Сравнение выпускников"
                        />
                    </Card>
                </HStack>

                <HStack className={classes.deleteBtn} maxW justify="end">
                    <Button size="small" onClick={() => setIsModalOpened(true)}>
                        Поиск по параметрам
                    </Button>
                    <Button
                        size="small"
                        variant="danger"
                        disabled={!selected.length}
                        onClick={() => {
                            setSelected([]);
                            deleteSearchParams('selected');
                            deleteSearchParams('task');
                        }}
                    >
                        Очистить выбор
                    </Button>
                </HStack>

                <Splitter className={classes.contentWrapper}>
                    <SplitterPanel size={40} className={classes.accordion}>
                        <Disclosure
                            titles={
                                candidates?.map((candidate) => (
                                    <HStack
                                        className={classes.disclosureBug}
                                        maxW
                                        justify="start"
                                        gap="16"
                                        key={candidate.id}
                                    >
                                        <Checkbox
                                            onChange={(event) => {
                                                event.stopPropagation();
                                                if (selected.includes(candidate)) {
                                                    setSelected((prev) =>
                                                        prev.filter((item) => item !== candidate),
                                                    );
                                                    return;
                                                }
                                                setSelected((prev) => [...prev, candidate]);
                                            }}
                                            checked={selected.includes(candidate)}
                                        />
                                        <img
                                            src={candidate.img}
                                            title={candidate.lastname}
                                            alt={candidate.lastname}
                                            className={classes.img}
                                        />
                                        <Text
                                            className={classes.textBlock}
                                            size="extrasmall"
                                            title={candidate.firstname}
                                        />
                                    </HStack>
                                )) || [<p>ничего</p>]
                            }
                            paragraphs={
                                candidates?.map((user) => (
                                    <VStack maxW gap="0" key={user.id}>
                                        <HStack maxW>
                                            <b>Возраст:</b>
                                            <p>{user.age}</p>
                                        </HStack>
                                        <HStack maxW>
                                            <b>Факультет:</b>
                                            <p>{user.faculty}</p>
                                        </HStack>
                                        <HStack maxW>
                                            <b>Специальность:</b>
                                            <p>{user.department}</p>
                                        </HStack>
                                        <HStack maxW>
                                            <b>Хобби:</b>
                                            <p>{user.hobby}</p>
                                        </HStack>
                                    </VStack>
                                )) || [<p>ничего</p>]
                            }
                        />
                        <Paginator
                            totalCandidates={totalCandidates}
                            setCurrentLimit={setLimit}
                            setCurrentPage={setPage}
                            currentPage={page}
                            currentLimit={limit}
                        />
                    </SplitterPanel>

                    <SplitterPanel size={60} className={classes.tableWrapper}>
                        <Table data={selected} onRowDelete={handleRowDelete} />
                        <Input
                            className={classes.input}
                            value={taskValue}
                            onChange={setTaskValue}
                            placeholder="Введите задачу, которую необходимо решить"
                        />
                        <HStack
                            maxW
                            justify="end"
                            className={classNames(classes.detailedComparisonLinkWrapper, {
                                [classes.active]:
                                    taskValue.length >= 10 &&
                                    selected.length >= 2 &&
                                    selected.length <= 6,
                            })}
                            onClick={handleComparisonClick}
                        >
                            <Text
                                title="Перейти к подробному сравнению"
                                size="small"
                                align="right"
                                className={classNames(classes.detailedComparisonLink, {
                                    [classes.active]:
                                        taskValue.length >= 10 &&
                                        selected.length >= 2 &&
                                        selected.length <= 6,
                                })}
                            />
                            <Icon Svg={ChevronIcon} />
                        </HStack>
                    </SplitterPanel>
                </Splitter>
            </Page>
        </DynamicModuleLoader>
    );
});

export default CandidatesPage;
