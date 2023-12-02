import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { Button } from 'shared/UI/Button';
import { useNavigate } from 'react-router-dom';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

import React, { useEffect } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { Breadcrumb } from 'shared/UI/Breadcrumb';
import classes from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
    const navigate = useNavigate();
    const { theme } = useTheme();

    useEffect(() => {
        document.title = '404 | Не найдено';
    }, []);

    return (
        <Page className={classNames(classes.NotFound, {}, [className])}>
            <PageTitle title="Страница не найдена" />
            <Button
                variant={theme === Theme.LIGHT ? 'primary' : 'warning'}
                onClick={() => navigate('/')}
            >
                На главную
            </Button>
        </Page>
    );
};
