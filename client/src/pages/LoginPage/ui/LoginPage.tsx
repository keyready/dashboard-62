import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useCallback, useState } from 'react';
import { AuthType, LoginForm, loginActions } from 'features/AuthByEmail';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import classes from './LoginPage.module.scss';

interface LoginPageProps {
    className?: string;
}

const LoginPage = memo((props: LoginPageProps) => {
    const { className } = props;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [selectedTab, setSelectedTab] = useState<string>('login');

    const changeTabHandler = useCallback(
        (tab: string | null) => {
            if (tab) {
                setSelectedTab(tab);
                dispatch(loginActions.setError(''));
                dispatch(loginActions.setPassword(''));
            }
        },
        [dispatch],
    );

    return (
        <Page className={classNames(classes.LoginPage, {}, [className])}>
            <Tabs defaultActiveKey={selectedTab} onSelect={changeTabHandler}>
                <Tab className={classes.tab} eventKey="login" title="Авторизация">
                    <LoginForm onSuccess={() => navigate('/candidates')} />
                </Tab>
                <Tab className={classes.tab} eventKey="register" title="Регистрация">
                    <LoginForm type={AuthType.REGISTER} />
                </Tab>
            </Tabs>
        </Page>
    );
});

export default LoginPage;
