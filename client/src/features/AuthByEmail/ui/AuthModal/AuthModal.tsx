import React, { FormEvent, memo, useCallback, useEffect, useState } from 'react';
import { Button } from 'shared/UI/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal } from 'shared/UI/Modal';
import { HStack, VStack } from 'shared/UI/Stack';
import { Input } from 'shared/UI/Input';
import MailIcon from 'shared/assests/icons/mail-icon.svg';
import PassIcon from 'shared/assests/icons/pass-icon.svg';
import { Text } from 'shared/UI/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getLoginEmail, getLoginError, getLoginPassword, loginActions } from 'features/AuthByEmail';
import { loginByEmail } from 'features/AuthByEmail/model/services/loginByEmail/loginByEmail';
import classes from './AuthModal.module.scss';

interface AuthModalProps {}

export const AuthModal = memo((props: AuthModalProps) => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>('');
    const [redirectedFrom, setRedirectedFrom] = useState<string>('');

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useLocation();

    const userMail = useSelector(getLoginEmail);
    const userPass = useSelector(getLoginPassword);
    const authError = useSelector(getLoginError);

    useEffect(() => {
        if (location.state?.from) {
            setRedirectedFrom(location.state?.from.pathname + location.state?.from.search);
        }
    }, [location]);

    const handleEmailChange = useCallback(
        (value: string) => {
            setEmailError('');
            dispatch(loginActions.setEmail(value));
        },
        [dispatch],
    );
    const handlePassChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );
    const handleForgetPassClick = useCallback(() => {}, []);
    const handleLoginClick = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            if (!userMail || !userPass) return;
            const emailRegex =
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            if (!emailRegex.test(userMail)) {
                setEmailError('Вы ввели некорректный email');
                return;
            }
            const result = await dispatch(loginByEmail({ email: userMail, password: userPass }));

            if (result.meta.requestStatus === 'fulfilled') {
                setIsModalOpened(false);
                dispatch(loginActions.setEmail(''));
                dispatch(loginActions.setPassword(''));
                navigate(redirectedFrom || RoutePath.candidates);
                if (redirectedFrom) window.location.reload();
            }
        },
        [dispatch, navigate, redirectedFrom, userMail, userPass],
    );

    return (
        <>
            <Modal
                className={classes.AuthModal}
                title="Вход"
                isOpen={isModalOpened}
                setIsOpen={setIsModalOpened}
            >
                <form onSubmit={handleLoginClick}>
                    <VStack maxW justify="start" gap="16" className={classes.body}>
                        <VStack maxW>
                            <Input
                                value={userMail}
                                onChange={handleEmailChange}
                                placeholder="Ваша почта"
                                icon={MailIcon}
                            />
                            {emailError && <Text size="small" text={emailError} variant="error" />}
                        </VStack>
                        <Input
                            value={userPass}
                            onChange={handlePassChange}
                            type="password"
                            placeholder="Ваш пароль"
                            icon={PassIcon}
                        />

                        <Text
                            onClick={handleForgetPassClick}
                            size="extrasmall"
                            text="Забыли пароль?"
                            className={classes.forget}
                        />

                        <Button
                            disabled={!userMail || !userPass}
                            variant="success"
                            type="submit"
                            className={classes.loginBtn}
                        >
                            Войти
                        </Button>

                        {authError && (
                            <Text
                                className={classes.authError}
                                title={authError}
                                size="small"
                                align="center"
                                variant="error"
                            />
                        )}

                        <HStack gap="8" justify="center" maxW className={classes.helpers}>
                            <Text
                                onClick={handleForgetPassClick}
                                size="extrasmall"
                                text="Еще нет аккаунта?"
                                className={classes.forgetP}
                            />
                            <Text
                                onClick={handleForgetPassClick}
                                size="extrasmall"
                                text="Зарегистрироваться!"
                                className={classes.forgetS}
                            />
                        </HStack>
                    </VStack>
                </form>
            </Modal>

            <Button
                variant="success"
                className={classes.btn}
                onClick={() => setIsModalOpened(true)}
            >
                Войти
            </Button>
        </>
    );
});
