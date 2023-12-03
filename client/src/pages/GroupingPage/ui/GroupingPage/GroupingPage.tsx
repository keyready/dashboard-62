import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useEffect, useMemo } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { HStack } from 'shared/UI/Stack';
import { FolderCard, FoldersList, useFolders } from 'entities/Folder';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Skeleton } from 'primereact/skeleton';
import classes from './GroupingPage.module.scss';

interface GroupingPageProps {
    className?: string;
}

const GroupingPage = memo((props: GroupingPageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'Группировка кандидатов';
    }, []);

    const {
        data: folders,
        isLoading: isFoldersLoading,
        error: foldersError,
        refetch: refreshFolderList,
    } = useFolders(0, { refetchOnMountOrArgChange: true });

    const Loader = useMemo(
        () => (
            <HStack maxW className={classes.loaderWrapper} gap="16">
                {new Array(4).fill(0).map((_, index) => (
                    <Skeleton
                        key={index}
                        style={{ flexShrink: 0 }}
                        width="390px"
                        height="500px"
                        borderRadius="8px"
                    />
                ))}
            </HStack>
        ),
        [],
    );

    return (
        <Page className={classNames(classes.GroupingPage, {}, [className])}>
            <PageTitle
                breadcrumbPath={[
                    { label: 'Сравнение кандидатов', url: RoutePath.candidates },
                    { label: 'Группировка кандидатов' },
                ]}
                title="Группировка кандидатов"
            />

            {isFoldersLoading && Loader}
            {foldersError && !isFoldersLoading && <div>Ошибка при загрузке</div>}
            {!isFoldersLoading && !foldersError && (
                <FoldersList refreshFolderList={refreshFolderList} folders={folders} />
            )}
        </Page>
    );
});

export default GroupingPage;
