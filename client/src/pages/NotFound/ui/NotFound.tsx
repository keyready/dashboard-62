import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

import { FileUpload } from 'primereact/fileupload';

import classes from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
    const navigate = useNavigate();
    const { theme } = useTheme();

    return (
        <Page className={classNames(classes.NotFound, {}, [className])}>
            <h2>Страница не найдена</h2>
            <Button
                variant={theme === Theme.LIGHT ? 'primary' : 'info'}
                onClick={() => navigate('/')}
            >
                На главную
            </Button>
        </Page>
    );
};
