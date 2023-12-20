import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useEffect } from 'react';
import { Text } from 'shared/UI/Text';
import classes from './AuthPage.module.scss';

interface AuthPageProps {
    className?: string;
}

const AuthPage = memo((props: AuthPageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = '403 | Нет доступа';
    }, []);

    return (
        <Page className={classNames(classes.AuthPage, {}, [className])}>
            <Text
                className={classes.text}
                align="center"
                title="Сначала авторизуйтесь!"
                text="Понимаем, что Вам очень нужно на эту страницу"
            />
            <Text
                className={classes.text}
                align="center"
                text={
                    'Но эта страница - органиченного пользования. ' +
                    'Сначала Вам придется авторизоваться'
                }
            />
            <h1 className={classes.icon}>403</h1>
        </Page>
    );
});

export default AuthPage;
