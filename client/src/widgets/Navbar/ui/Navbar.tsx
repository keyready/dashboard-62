import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback } from 'react';
import { HStack } from 'shared/UI/Stack';
import { Text } from 'shared/UI/Text';
import { Icon } from 'shared/UI/Icon/Icon';
import InfoIcon from 'shared/assests/icons/info-icon.svg';
import DownloadIcon from 'shared/assests/icons/download-icon.svg';
import RangeIcon from 'shared/assests/icons/range-icon.svg';
import { AppLink } from 'shared/UI/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { AuthModal } from 'features/AuthByEmail';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Button } from 'shared/UI/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;

    const userData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const handleLogoutClick = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <HStack maxW justify="between" className={classNames(classes.Navbar, {}, [className])}>
            <Text title="Dashboard" size="large" />
            <AppLink to={RoutePath.main} className={classes.link}>
                <HStack gap="8">
                    <Icon className={classes.icon} Svg={InfoIcon} />
                    <Text text="О проекте" size="small" />
                </HStack>
            </AppLink>
            <AppLink to={RoutePath.candidates} className={classes.link}>
                <HStack gap="8">
                    <Icon className={classes.icon} Svg={RangeIcon} />
                    <Text text="Сравнение кандидатов" size="small" />
                </HStack>
            </AppLink>
            <AppLink to={RoutePath.filesupload} className={classes.link}>
                <HStack gap="8">
                    <Icon className={classes.icon} Svg={DownloadIcon} />
                    <Text text="Загрузить данные" size="small" />
                </HStack>
            </AppLink>

            {userData ? (
                <Button variant="danger" onClick={handleLogoutClick}>
                    Выйти
                </Button>
            ) : (
                <AuthModal />
            )}
        </HStack>
    );
});
