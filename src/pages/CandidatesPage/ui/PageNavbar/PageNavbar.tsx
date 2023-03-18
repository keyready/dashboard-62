import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button, Form } from 'react-bootstrap';
import classes from './PageNavbar.module.scss';

interface PageNavbarProps {
    className?: string;
    isCandidates?: boolean
    search?: string;
    setSearch?: (value: string) => void;
    setIsFocused?: (flag: boolean) => void;
}

export const PageNavbar = memo((props: PageNavbarProps) => {
    const {
        className,
        isCandidates,
        search,
        setSearch,
        setIsFocused,
    } = props;

    return (
        <div className={classNames(classes.PageNavbar, {}, [className])}>
            <Form
                onSubmit={(e) => e.preventDefault()}
                className={classes.form}
            >
                <Form.Control
                    type="text"
                    placeholder="Поиск..."
                    onClick={() => setIsFocused?.(true)}
                    // onFocus={() => setIsFocused?.(true)}
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
