import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useEffect } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { useParams } from 'react-router-dom';
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

    return (
        <Page className={classNames(classes.FolderOverviewPage, {}, [className])}>
            <PageTitle title={`Просмотр группы ${folderId}`} />
        </Page>
    );
});

export default FolderOverviewPage;
