import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useEffect } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import classes from './CreateFolderPage.module.scss';

interface CreateFolderPageProps {
    className?: string;
}

const CreateFolderPage = memo((props: CreateFolderPageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'Создать категорию';
    }, []);

    return (
        <Page className={classNames(classes.CreateFolderPage, {}, [className])}>
            <PageTitle title="Создать категорию" />
        </Page>
    );
});

export default CreateFolderPage;
