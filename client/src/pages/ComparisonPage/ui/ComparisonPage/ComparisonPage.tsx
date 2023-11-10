import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import classes from './ComparisonPage.module.scss';
import { CompareReducer } from '../../model/slice/CompareSlice';

interface ComparisonPageProps {
    className?: string;
}

const reducers: ReducersList = {
    comparisonData: CompareReducer,
};

const ComparisonPage = memo((props: ComparisonPageProps) => {
    const { className } = props;

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(classes.ComparisonPage, {}, [className])}>
                <h2 className={classes.header}>Привет миры</h2>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ComparisonPage;
