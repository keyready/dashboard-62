import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchFolderById, FolderReducer, getFolderData, getFolderIsLoading } from 'entities/Folder';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Text } from 'shared/UI/Text';
import { Divider } from 'primereact/divider';
import { CandidatePreviewGrid, deleteCandidateFolder } from 'entities/Candidate';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Skeleton } from 'primereact/skeleton';
import { HStack, VStack } from 'shared/UI/Stack';
import { Button } from 'shared/UI/Button';
import { useToaster } from 'shared/lib/hooks/useToaster/useToaster';
import { AddParticipantsModal } from '../AddParticipantsModal/AddParticipantsModal';
import classes from './FolderOverviewPage.module.scss';

interface FolderOverviewPageProps {
    className?: string;
}

const FolderOverviewPage = memo((props: FolderOverviewPageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'Просмотр группы';
    }, []);

    const { urlFolderId } = useParams();
    const dispatch = useAppDispatch();
    const isFolderLoading = useSelector(getFolderIsLoading);
    const folder = useSelector(getFolderData);
    const { pending } = useToaster();

    const [folderId, setFolderId] = useState<number>(-55);
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [wasDefined, setWasDefined] = useState<boolean>(false);

    useEffect(() => {
        if (!urlFolderId) {
            throw new Error('FolderID');
        }
        setFolderId(~~urlFolderId);
    }, [urlFolderId]);

    useEffect(() => {
        if (folderId > 0) dispatch(fetchFolderById(folderId));
    }, [dispatch, folderId]);

    useEffect(() => {
        if (wasDefined) {
            dispatch(fetchFolderById(folderId));
            setWasDefined(false);
        }
    }, [wasDefined, dispatch, folderId]);

    const handleModalClick = useCallback(() => {
        setIsModalOpened(true);
    }, []);

    const handleCandidateDelete = useCallback(
        async (candidateId: number) => {
            const result = await pending(
                dispatch(deleteCandidateFolder({ folderId, candidateId })),
                {
                    loadingMessage: 'Исключаем кандидата из группы...',
                    successMessage: 'Его здесь больше нет!',
                },
            );

            if (result.meta.requestStatus === 'fulfilled') {
                dispatch(fetchFolderById(folderId));
            }
        },
        [dispatch, folderId, pending],
    );

    if (isFolderLoading) {
        return (
            <DynamicModuleLoader reducers={{ folder: FolderReducer }}>
                <Page className={classNames(classes.FolderOverviewPage, {}, [className])}>
                    <PageTitle
                        breadcrumbPath={[
                            { label: 'Сравнение кандидатов', url: RoutePath.candidates },
                            { label: 'Группировка кандидатов', url: RoutePath.grouping },
                            { label: 'Просмотр группы' },
                        ]}
                        title="Просмотр группы ..."
                    />

                    <Divider align="left" className={classes.divider}>
                        <Text
                            className={classes.dividerTitle}
                            align="left"
                            text="Участники группы"
                            size="small"
                        />
                    </Divider>

                    <div className={classes.skeletonGrid}>
                        {new Array(10).fill(0).map((_, index) => (
                            <VStack maxW key={index} align="center">
                                <Skeleton width="150px" height="150px" />
                                <Skeleton width="80px" height="15px" />
                                <Skeleton width="120px" height="15px" />
                            </VStack>
                        ))}
                    </div>
                </Page>
            </DynamicModuleLoader>
        );
    }

    return (
        <DynamicModuleLoader reducers={{ folder: FolderReducer }}>
            <Page className={classNames(classes.FolderOverviewPage, {}, [className])}>
                <AddParticipantsModal
                    folderId={folderId}
                    open={isModalOpened}
                    setOpen={setIsModalOpened}
                    setWasDefined={setWasDefined}
                />

                <PageTitle
                    breadcrumbPath={[
                        { label: 'Сравнение кандидатов', url: RoutePath.candidates },
                        { label: 'Группировка кандидатов', url: RoutePath.grouping },
                        { label: 'Просмотр группы' },
                    ]}
                    title={`Просмотр группы ${folder?.title}`}
                />

                <Divider align="left" className={classes.divider}>
                    <HStack gap="32">
                        <Text
                            className={classes.dividerTitle}
                            align="left"
                            text="Участники группы"
                            size="small"
                        />
                        <Button size="small" onClick={handleModalClick}>
                            Добавить
                        </Button>
                    </HStack>
                </Divider>
                {!folder?.participants?.length ? (
                    <Text title="Тут пока никого нет..." />
                ) : (
                    <CandidatePreviewGrid
                        handleCandidateDelete={handleCandidateDelete}
                        gridColumns={6}
                        candidates={folder.participants}
                    />
                )}
            </Page>
        </DynamicModuleLoader>
    );
});

export default FolderOverviewPage;
