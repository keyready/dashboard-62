import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button, Form } from 'react-bootstrap';
import classes from './PageNavbar.module.scss';

interface PageNavbarProps {
    className?: string;
    isCandidates?: boolean
    search?: string;
    setSearch?: (value: string) => void;
    submitFormHandler?: () => void;
}

export const PageNavbar = memo((props: PageNavbarProps) => {
    const {
        className,
        isCandidates,
        search,
        setSearch,
        submitFormHandler,
    } = props;

    return (
        <div className={classNames(classes.PageNavbar, {}, [className])}>
            <Form
                onSubmit={submitFormHandler}
                className={classes.form}
            >
                <Form.Control
                    type="text"
                    placeholder="Поиск..."
                    value={search}
                    onChange={(e) => setSearch?.(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="secondary"
                    disabled={!search}
                >
                    Поиск
                </Button>
            </Form>
            <Button
                disabled={!isCandidates}
                onClick={() => console.log('Сравнение кандидатов')}
            >
                Сравнить
            </Button>
        </div>
    );
});
