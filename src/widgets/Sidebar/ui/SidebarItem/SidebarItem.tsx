import { Link, useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';
import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
}

export const SidebarItem = memo(({ item }: SidebarItemProps) => {
    const location = useLocation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <Link
            to={item?.path || ''}
            className={classNames(classes.item, { }, [])}
        >
            <item.Icon className={classes.icon} />
            {/* <span className={classes.link}> */}
            {/*    {item?.text} */}
            {/* </span> */}
        </Link>
    );
});
