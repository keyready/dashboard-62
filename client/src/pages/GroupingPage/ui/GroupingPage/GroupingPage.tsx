import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useEffect } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { HStack } from 'shared/UI/Stack';
import { FolderCard, FoldersList, useFolders } from 'entities/Folder';
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
    } = useFolders(0, { refetchOnMountOrArgChange: true });

    return (
        <Page className={classNames(classes.GroupingPage, {}, [className])}>
            <PageTitle title="Группировка кандидатов" />

            {isFoldersLoading && <div>Загрузка...</div>}
            {foldersError && !isFoldersLoading && <div>Ошибка при загрузке</div>}
            {!isFoldersLoading && !foldersError && <FoldersList folders={folders} />}
        </Page>
    );
});

export default GroupingPage;
