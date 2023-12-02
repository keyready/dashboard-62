import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useEffect, useState } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { useURLParams } from 'shared/url/useSearchParams/useSearchParams';
import classes from './AllocationPage.module.scss';

interface AllocationPageProps {
    className?: string;
}

const AllocationPage = memo((props: AllocationPageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'Распределение кандидатов';
    }, []);

    const [groupTitle, setGroupTitle] = useState<string>('');

    const { getSearchParam } = useURLParams();
    useEffect(() => {
        setGroupTitle(getSearchParam('folder') || '');
    }, []);

    return (
        <Page className={classNames(classes.AllocationPage, {}, [className])}>
            <PageTitle title={`Распределения кандидатов группы '${groupTitle}'`} />
        </Page>
    );
});

export default AllocationPage;
