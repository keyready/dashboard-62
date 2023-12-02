import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem, MenuItemCommandEvent } from 'primereact/menuitem';
import { HomeIcon } from '@radix-ui/react-icons';
import { AppLink } from 'shared/UI/AppLink';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Breadcrumb.module.scss';

export interface BreadcrumbPath {
    label: string;
    url?: string;
}

interface BreadcrumbProps {
    className?: string;
    path: BreadcrumbPath[];
}

export const Breadcrumb = memo((props: BreadcrumbProps) => {
    const { className, path } = props;

    const home = useMemo<MenuItem>(() => ({ url: '/', icon: <HomeIcon /> }), []);
    const navigate = useNavigate();

    return (
        <BreadCrumb
            model={path.map((pathPiece) => ({
                ...pathPiece,
                command(event: MenuItemCommandEvent) {
                    event.originalEvent.preventDefault();
                    navigate(pathPiece.url || '');
                },
            }))}
            home={home}
            className={classNames(classes.Breadcrumb, {}, [className])}
        />
    );
});
