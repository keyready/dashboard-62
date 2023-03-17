import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { ChangeEvent, memo, useCallback } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'react-bootstrap';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';
import classes from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const {
        className,
        onSuccess,
    } = props;

    const onUsernameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUsername(e.target.value));
    }, [dispatch]);
    const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value));
    }, [dispatch]);
    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByEmail({ email: username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <form
                className={classNames(classes.LoginForm, {}, [className])}
            >
                <h2>Авторизация</h2>
                {error && <p className={classes.loginError}>{error}</p>}
                <input
                    placeholder="Введите имя"
                    value={username}
                    onChange={onUsernameChange}
                    type="text"
                />
                <input
                    placeholder="Введите пароль"
                    value={password}
                    onChange={onPasswordChange}
                    type="password"
                />
                <Button
                    className={classes.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                    type="submit"
                >
                    Войти
                </Button>
            </form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
