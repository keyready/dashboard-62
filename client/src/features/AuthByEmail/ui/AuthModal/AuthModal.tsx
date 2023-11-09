import { classNames } from 'shared/lib/classNames/classNames';
import React, { FormEvent, memo, useCallback, useState } from 'react';
import { Button } from 'shared/UI/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
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

interface AuthModalProps {
    className?: string;
}

export const AuthModal = memo((props: AuthModalProps) => {
    const { className } = props;

    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const userMail = useSelector(getLoginEmail);
    const userPass = useSelector(getLoginPassword);
    const authError = useSelector(getLoginError);

    const handleEmailChange = useCallback(
        (value: string) => {
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
    const handleTabsChange = useCallback(() => {}, []);
    const handleLoginClick = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const result = await dispatch(loginByEmail({ email: userMail, password: userPass }));

            if (result.meta.requestStatus === 'fulfilled') {
                setIsModalOpened(false);
                dispatch(loginActions.setEmail(''));
                dispatch(loginActions.setPassword(''));
                navigate(RoutePath.candidates);
            }
        },
        [dispatch, navigate, userMail, userPass],
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
                    <VStack maxW justify="start" gap="16"
className={classes.body}>
                        <Input
                            value={userMail}
                            onChange={handleEmailChange}
                            placeholder="Ваша почта"
                            icon={MailIcon}
                        />
                        <Input
                            value={userPass}
                            onChange={handlePassChange}
                            placeholder="Ваш пароль"
                            icon={PassIcon}
                        />

                        <Text
                            onClick={handleForgetPassClick}
                            size="extrasmall"
                            text="Забыли пароль?"
                            className={classes.forget}
                        />

                        <Button type="submit" className={classes.loginBtn}>
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

                        <HStack gap="8" justify="center" maxW
className={classes.helpers}>
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

            <Button className={classes.btn} variant="danger" onClick={() => setIsModalOpened(true)}>
                Войти
            </Button>
        </>
    );
});
