import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import classes from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => (
    <Page className={classNames(classes.NotFound, {}, [className])}>
        Страница не найдена
    </Page>
);
