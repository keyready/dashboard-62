import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useEffect } from 'react';
import classes from './CreateCandidatePage.module.scss';

interface CreateCandidatePageProps {
    className?: string;
}

const CreateCandidatePage = memo((props: CreateCandidatePageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'Подайте заявку';
    }, []);

    return (
        <Page className={classNames(classes.CreateCandidatePage, {}, [className])}>
            <h1>Регистрация кандидата</h1>
        </Page>
    );
});

export default CreateCandidatePage;
