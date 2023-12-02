import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useEffect } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { HStack } from 'shared/UI/Stack';
import { FolderCard, FoldersList } from 'entities/Folder';
import classes from './GroupingPage.module.scss';

interface GroupingPageProps {
    className?: string;
}

const GroupingPage = memo((props: GroupingPageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'Группировка кандидатов';
    }, []);

    return (
        <Page className={classNames(classes.GroupingPage, {}, [className])}>
            <PageTitle title="Группировка кандидатов" />

            <FoldersList
                folders={new Array(10).fill(0).map((_, index) => ({
                    id: index,
                    title: 'Инженеры',
                    groupingRule:
                        'Факультет инженерного и электромеханического обеспечения,  Кафедра ' +
                        'специальных сооружений ракетно-космических комплексов',
                }))}
            />
        </Page>
    );
});

export default GroupingPage;
