import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/UI/Text';
import classes from './LoginPage.module.scss';

interface LoginPageProps {
    className?: string;
}

const LoginPage = memo((props: LoginPageProps) => {
    const { className } = props;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <Page className={classNames(classes.LoginPage, {}, [className])}>
            <Text title="Страница авторизации" />
        </Page>
    );
});

export default LoginPage;
