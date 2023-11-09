import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'react-bootstrap';
import classes from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(classes.PageError, {}, [className])}>
            <h1>Сайт упал</h1>
            <Button onClick={reloadPage}>Обновить</Button>
        </div>
    );
};
