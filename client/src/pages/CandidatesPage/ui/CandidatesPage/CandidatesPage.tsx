import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useCallback, useEffect, useState } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Table } from 'shared/UI/Table';
import { HStack, VStack } from 'shared/UI/Stack';
import { Button } from 'shared/UI/Button';
import { Text } from 'shared/UI/Text';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { useNavigate } from 'react-router-dom';
import { useURLParams } from 'shared/url/useSearchParams/useSearchParams';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Icon } from 'shared/UI/Icon/Icon';
import ChevronIcon from 'shared/assests/icons/chevron-down.svg';
import { Input } from 'shared/UI/Input';
import { Candidate, defineCandidateFolder } from 'entities/Candidate';
import { Skeleton } from 'primereact/skeleton';
import { Paginator } from 'widgets/Paginator';
import { useSelector } from 'react-redux';
import { getTotalCandidates } from 'pages/CandidatesPage/model/selectors/candidatesPageSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchTotalCandidates } from 'pages/CandidatesPage';
import { CandidatesFilterModal, FilterOptions } from 'widgets/CandidatesFilterModal';
import { PageTitle } from 'widgets/PageTitle';
import { CandidatesDisclosure } from 'widgets/CandidatesDisclosure';
import { Modal } from 'shared/UI/Modal';
import { VerticalFolderList } from 'entities/Folder';
import { useToaster } from 'shared/lib/hooks/useToaster/useToaster';
import { useCandidates } from '../../api/fetchCandidatesApi';
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

    useEffect(() => {
        document.title = 'Кандидаты';
    }, []);

    const { addSearchParams, deleteSearchParams, getSearchParam } = useURLParams();

    const [selected, setSelected] = useState<Candidate[]>([]);
    const [selectedIdsFromUrl, setSelectedIdsFromUrl] = useState<number[]>([]);
    const [taskValue, setTaskValue] = useState<string>('');
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [isCandidateAdding, setIsCandidateAdding] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [selectedCandidateToAdd, setSelectedCandidateToAdd] = useState<number>(-1);
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    const [filterOptions, setFilterOptions] = useState<FilterOptions>({
        education: [],
        age: [18, 40],
    });

    const navigate = useNavigate();
    const totalCandidates = useSelector(getTotalCandidates);
    const dispatch = useAppDispatch();
    const { pending } = useToaster();

    const {
        data: candidates,
        isLoading: isCandidatesLoading,
        isFetching: isCandidatesFetching,
    } = useCandidates({ page, limit, filterOptions });

    useEffect(() => {
        dispatch(fetchTotalCandidates());
    }, [filterOptions, dispatch]);

    useEffect(() => {
        dispatch(fetchTotalCandidates());

        const urlTask = getSearchParam('task');
        const urlSelected = getSearchParam('selected');
        const urlAge = getSearchParam('age');
        const urlEducation = getSearchParam('education');

        if (urlTask) setTaskValue(urlTask);
        if (urlSelected) setSelectedIdsFromUrl(urlSelected.split(',').map(Number));
        if (urlEducation) {
            setFilterOptions({
                ...filterOptions,
                education: urlEducation.split(','),
            });
            addSearchParams({ education: urlEducation });
        }
        if (urlAge) {
            setFilterOptions({
                ...filterOptions,
                age: urlAge.split(',').map(Number) as [number, number],
            });
            addSearchParams({ age: urlAge });
        }
    }, [dispatch, filterOptions]);

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

    const handler = useCallback(
        async (id: number) => {
            setIsCandidateAdding(true);
            await pending(
                dispatch(
                    defineCandidateFolder({
                        candidateIds: [selectedCandidateToAdd],
                        folderId: id,
                    }),
                ),
                {
                    successMessage: 'Кандидат добавлен в группу',
                    loadingMessage: 'Добавление...',
                },
            );
            setIsCandidateAdding(false);
            setIsAddModalOpen(false);
        },
        [dispatch, pending, selectedCandidateToAdd],
    );

    const handleModalOpen = useCallback((id: number) => {
        setIsAddModalOpen(true);
        setSelectedCandidateToAdd(id);
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
            <Modal className={classes.modal} isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen}>
                <VerticalFolderList isCandidateAdding={isCandidateAdding} handleClick={handler} />
            </Modal>

            <Page className={classNames(classes.CandidatesPage, {}, [className])}>
                <CandidatesFilterModal
                    filterOptions={filterOptions}
                    setIsOpen={setIsModalOpened}
                    isOpen={isModalOpened}
                    setFilterOptions={setFilterOptions}
                />

                <PageTitle title="Сравнение выпускников" />

                <HStack className={classes.deleteBtn} maxW justify="end">
                    <Button
                        variant="warning"
                        size="small"
                        onClick={() => navigate(RoutePath.grouping)}
                    >
                        Группировка кандидатов
                    </Button>
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
                        {isCandidatesFetching ? (
                            <VStack gap="16" className={classes.skeletonListFetching}>
                                {new Array(5).fill(0).map((_, index) => (
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
                        ) : (
                            <CandidatesDisclosure
                                page={page}
                                limit={limit}
                                filterOptions={filterOptions}
                                defaultSelected={selected}
                                setSelectedProps={setSelected}
                                handleShowAddModal={handleModalOpen}
                            />
                        )}
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
