import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useEffect, useState } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { useURLParams } from 'shared/url/useSearchParams/useSearchParams';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
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
            <PageTitle
                breadcrumbPath={[
                    { label: 'Сравнение кандидатов', url: RoutePath.candidates },
                    { label: 'Группировка кандидатов', url: RoutePath.grouping },
                    { label: 'Распределение кандидатов' },
                ]}
                title={`Распределения кандидатов группы '${groupTitle}'`}
            />
        </Page>
    );
});

export default AllocationPage;
