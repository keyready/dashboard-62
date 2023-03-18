import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Button, Form } from 'react-bootstrap';
import classes from './PageNavbar.module.scss';

interface PageNavbarProps {
    className?: string;
    isCandidates?: boolean
    setIsFocused?: (flag: boolean) => void;
}

export const PageNavbar = memo((props: PageNavbarProps) => {
    const {
        className,
        isCandidates,
        setIsFocused,
    } = props;

    return (
        <div className={classNames(classes.PageNavbar, {}, [className])}>
            <Form
                className={classes.form}
            >
                <Form.Control
                    type="text"
                    placeholder="Поиск..."
                    onClick={() => setIsFocused?.(true)}
                />
            </Form>
            <Button
                disabled={!isCandidates}
                variant="warning"
                onClick={() => console.log('Сравнение кандидатов')}
            >
                Сравнить
            </Button>
        </div>
    );
});
