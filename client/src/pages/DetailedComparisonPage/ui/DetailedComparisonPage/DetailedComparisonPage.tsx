/* eslint-disable guard-for-in,no-restricted-syntax */
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo } from 'react';

interface DetailedComparisonPageProps {
    className?: string;
}

const DetailedComparisonPage = memo((props: DetailedComparisonPageProps) => {
    const { className } = props;

    return (
        <Page className={classNames('', {}, [className])}>
            <h2>Привет мир</h2>
        </Page>
    );
});

export default DetailedComparisonPage;
