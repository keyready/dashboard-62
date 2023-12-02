import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Card } from 'shared/UI/Card';
import { Text } from 'shared/UI/Text';
import { HStack } from 'shared/UI/Stack';
import classes from './PageTitle.module.scss';

interface PageTitleProps {
    className?: string;
    title: string;
}

export const PageTitle = memo((props: PageTitleProps) => {
    const { className, title } = props;

    return (
        <HStack justify="start" className={classNames(classes.PageTitle, {}, [className])}>
            <Card className={classes.card}>
                <Text align="left" size="large" className={classes.textBlock}
title={title} />
            </Card>
        </HStack>
    );
});
