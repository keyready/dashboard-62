import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData, userActions } from 'entities/User';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import classes from './Sidebar.module.scss';

export interface SidebarProps {
    classname?: string
}

export const Sidebar = memo(({ classname }: SidebarProps) => {
    const SidebarItemsList = useSelector(getSidebarItems);

    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);

    const listItem = useMemo(
        () => SidebarItemsList.map((item) => (
            <SidebarItem
                key={item.path}
                item={item}
            />
        )),
        [SidebarItemsList],
    );

    const userLogoutHandler = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div
            className={classNames(
                classes.Sidebar,
                {},
                [classname],
            )}
        >
            <div className={classes.items}>
                {listItem}
            </div>

            <div className={classes.switchers}>
                <Button
                    onClick={toggleTheme}
                    variant={theme === Theme.LIGHT ? 'dark' : 'info'}
                >
                    Тема
                </Button>
                {authData && (
                    <Button
                        onClick={userLogoutHandler}
                        variant={theme === Theme.LIGHT ? 'dark' : 'info'}
                    >
                        Выйти
                    </Button>
                )}
            </div>
        </div>
    );
});
