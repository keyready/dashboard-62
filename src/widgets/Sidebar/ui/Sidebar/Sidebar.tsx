import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useTheme } from 'app/providers/ThemeProvider';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import classes from './Sidebar.module.scss';

export interface SidebarProps {
    classname?: string
}

export const Sidebar = memo(({ classname }: SidebarProps) => {
    const SidebarItemsList = useSelector(getSidebarItems);

    const { theme, toggleTheme } = useTheme();

    const listItem = useMemo(
        () => SidebarItemsList.map((item) => (
            <SidebarItem
                key={item.path}
                item={item}
            />
        )),
        [SidebarItemsList],
    );

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
                >
                    кнопка
                </Button>
            </div>
        </div>
    );
});
