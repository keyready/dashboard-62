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
import { useLocation } from 'react-router-dom';
import { AuthModal } from 'features/AuthByEmail';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Button } from 'shared/UI/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;

    const userData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const location = useLocation();

    const handleLogoutClick = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <HStack
            gap="32"
            maxW
            justify="between"
            className={classNames(classes.Navbar, {}, [className])}
        >
            <Text title="Dashboard" size="large" />

            <HStack maxW gap="16" justify="center">
                <AppLink
                    to={RoutePath.main}
                    className={classNames(classes.link, {
                        [classes.active]: location.pathname === RoutePath.main,
                    })}
                >
                    <HStack gap="8">
                        <Icon className={classes.icon} Svg={InfoIcon} />
                        <Text text="О проекте" size="small" />
                    </HStack>
                </AppLink>

                {userData ? (
                    <>
                        <AppLink
                            to={RoutePath.candidates}
                            className={classNames(classes.link, {
                                [classes.active]:
                                    location.pathname === RoutePath.candidates ||
                                    location.pathname === RoutePath.grouping,
                            })}
                        >
                            <HStack gap="8">
                                <Icon className={classes.icon} Svg={RangeIcon} />
                                <Text text="Сравнение кандидатов" size="small" />
                            </HStack>
                        </AppLink>
                        <AppLink
                            to={RoutePath.filesupload}
                            className={classNames(classes.link, {
                                [classes.active]: location.pathname === RoutePath.filesupload,
                            })}
                        >
                            <HStack gap="8">
                                <Icon className={classes.icon} Svg={DownloadIcon} />
                                <Text text="Загрузить данные" size="small" />
                            </HStack>
                        </AppLink>
                    </>
                ) : (
                    <AppLink
                        to={RoutePath.createcandidatepage}
                        className={classNames(classes.link, {
                            [classes.active]: location.pathname === RoutePath.createcandidatepage,
                        })}
                    >
                        <HStack gap="8">
                            <EnvelopeClosedIcon
                                className={classNames(classes.icon, {}, [classes.radixIcon])}
                            />
                            <Text text="Подать анкету" size="small" />
                        </HStack>
                    </AppLink>
                )}
            </HStack>

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
