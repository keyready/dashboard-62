import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';

import React, { useEffect } from 'react';
import { Text } from 'shared/UI/Text';
import classes from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
    useEffect(() => {
        document.title = '404 | Не найдено';
    }, []);

    return (
        <Page className={classNames(classes.NotFound, {}, [className])}>
            <Text className={classes.text} align="center" title="Такой страницы не существует" />
            <Text className={classes.text} text="Или она навсегда перенесена на другой адрес. " />
            <Text
                className={classes.text}
                text="Попробуйте посетить другую страницу или перейдите на главную"
            />

            <h1 className={classes.icon}>404</h1>
        </Page>
    );
};
