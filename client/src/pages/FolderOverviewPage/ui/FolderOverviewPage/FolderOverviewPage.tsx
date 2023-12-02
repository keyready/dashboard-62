import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useEffect, useState } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchFolderById, FolderReducer, getFolderData, getFolderIsLoading } from 'entities/Folder';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Text } from 'shared/UI/Text';
import { Divider } from 'primereact/divider';
import { CandidatesDisclosure } from 'widgets/CandidatesDisclosure';
import { Candidate, CandidatePreviewGrid } from 'entities/Candidate';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Skeleton } from 'primereact/skeleton';
import { VStack } from 'shared/UI/Stack';
import classes from './FolderOverviewPage.module.scss';

interface FolderOverviewPageProps {
    className?: string;
}

const FolderOverviewPage = memo((props: FolderOverviewPageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'Просмотр группы';
    }, []);

    const { folderId } = useParams();
    const dispatch = useAppDispatch();
    const isFolderLoading = useSelector(getFolderIsLoading);
    const folder = useSelector(getFolderData);

    const [selected2Delete, setSelected2Delete] = useState<Candidate[]>([]);

    useEffect(() => {
        setSelected2Delete(folder?.participants || []);
        console.log(folder?.participants);
    }, [folder]);

    useEffect(() => {
        if (folderId) {
            dispatch(fetchFolderById(~~folderId));
        }
    }, [dispatch, folderId]);

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
                <PageTitle
                    breadcrumbPath={[
                        { label: 'Сравнение кандидатов', url: RoutePath.candidates },
                        { label: 'Группировка кандидатов', url: RoutePath.grouping },
                        { label: 'Просмотр группы' },
                    ]}
                    title={`Просмотр группы ${folder?.title}`}
                />

                <Divider align="left" className={classes.divider}>
                    <Text
                        className={classes.dividerTitle}
                        align="left"
                        text="Участники группы"
                        size="small"
                    />
                </Divider>
                {!folder?.participants?.length ? (
                    <Text title="Тут пока никого нет..." />
                ) : (
                    <CandidatePreviewGrid gridColumns={6} candidates={folder.participants} />
                )}
            </Page>
        </DynamicModuleLoader>
    );
});

export default FolderOverviewPage;
