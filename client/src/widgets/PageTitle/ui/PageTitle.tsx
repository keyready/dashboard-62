import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Card } from 'shared/UI/Card';
import { Text } from 'shared/UI/Text';
import { HStack, VStack } from 'shared/UI/Stack';
import { Breadcrumb, BreadcrumbPath } from 'shared/UI/Breadcrumb';
import classes from './PageTitle.module.scss';

interface PageTitleProps {
    className?: string;
    title: string;
    breadcrumbPath?: BreadcrumbPath[];
}

export const PageTitle = memo((props: PageTitleProps) => {
    const { className, title, breadcrumbPath } = props;

    return (
        <VStack justify="start" className={classNames(classes.PageTitle, {}, [className])}>
            {breadcrumbPath?.length && <Breadcrumb className={classes.bc} path={breadcrumbPath} />}
            <Card className={classes.card}>
                <Text align="left" size="large" className={classes.textBlock} title={title} />
            </Card>
        </VStack>
    );
});
