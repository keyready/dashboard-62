import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo } from 'react';
import classes from './ComparisonPage.module.scss';

interface ComparisonPageProps {
    className?: string;
}

const ComparisonPage = memo((props: ComparisonPageProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(classes.ComparisonPage, {}, [className])}>
            //
        </Page>
    );
});

export default ComparisonPage;
