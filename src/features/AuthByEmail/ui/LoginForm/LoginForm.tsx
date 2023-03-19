import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import {
    ChangeEvent, FormEvent, memo, useCallback,
} from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Alert, Button, Form, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import {
    registerByEmail,
} from '../../model/services/registerByEmail/registerByEmail';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';
import classes from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';

export enum AuthType {
    LOGIN = 'login',
    REGISTER = 'register'
}

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
    onRegisterRedirect?: (tab: string) => void;
    type?: AuthType;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
        onSuccess,
        type = 'login',
        onRegisterRedirect,
    } = props;

    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const { theme } = useTheme();

    const onUsernameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUsername(e.target.value));
    }, [dispatch]);
    const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value));
    }, [dispatch]);
    const onAuthSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (type === AuthType.LOGIN) {
            const result = await dispatch(loginByEmail({ email: username, password }));
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess?.();
            }
        } else {
            const result = await dispatch(registerByEmail({ email: username, password }));
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess?.();
            }
        }
    }, [dispatch, onSuccess, password, type, username]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <Form
                onSubmit={onAuthSubmit}
                className={classNames(classes.LoginForm, {}, [className])}
            >
                {error && (
                    <Alert
                        className={classes.alert}
                        style={{ margin: 0 }}
                        variant="warning"
                    >
                        <p>{`Во время авторизации произошла ошибка: ${error}`}</p>
                        {type !== AuthType.REGISTER
                            && <p>Нет аккаунта? Зарегистрируйтесь</p>}
                    </Alert>
                )}
                <Form.Control
                    className={classes.input}
                    placeholder="Введите логин"
                    value={username}
                    onChange={onUsernameChange}
                    type="text"
                />
                <Form.Control
                    className={classes.input}
                    placeholder="Введите пароль"
                    value={password}
                    onChange={onPasswordChange}
                    type="password"
                />

                {!username || !password
                    ? (
                        <OverlayTrigger
                            overlay={<Tooltip>Заполните все поля!</Tooltip>}
                            placement="bottom"
                            delay={{ show: 100, hide: 500 }}
                        >
                            <span
                                className={classes.loginBtn}
                            >
                                <Button
                                    disabled={isLoading || !username || !password}
                                    variant={theme === Theme.LIGHT ? 'primary' : 'info'}
                                    type="submit"
                                >
                                    {type === AuthType.LOGIN
                                        ? 'Войти'
                                        : 'Регистрация'}
                                </Button>
                            </span>
                        </OverlayTrigger>
                    )
                    : (
                        <Button
                            className={classes.loginBtn}
                            disabled={isLoading || !username || !password}
                            variant={theme === Theme.LIGHT ? 'primary' : 'info'}
                            type="submit"
                        >
                            {type === AuthType.LOGIN
                                ? 'Войти'
                                : 'Регистрация'}
                        </Button>
                    )}
            </Form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
