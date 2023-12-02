import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import { HomeIcon } from '@radix-ui/react-icons';
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

    return (
        <BreadCrumb
            model={path}
            home={home}
            className={classNames(classes.Breadcrumb, {}, [className])}
        />
    );
});
