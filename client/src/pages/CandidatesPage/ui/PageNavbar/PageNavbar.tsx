import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from './PageNavbar.module.scss';

interface PageNavbarProps {
    className?: string;
    isCandidates?: boolean;
    setIsFocused?: (flag: boolean) => void;
}

export const PageNavbar = memo((props: PageNavbarProps) => {
    const { className, isCandidates, setIsFocused } = props;

    const navigate = useNavigate();
    const redirectHandler = useCallback(() => {
        navigate('/comparison');
    }, [navigate]);

    return (
        <div className={classNames(classes.PageNavbar, {}, [className])}>
            <Form className={classes.form}>
                <Form.Control
                    type="text"
                    placeholder="Поиск..."
                    onClick={() => setIsFocused?.(true)}
                />
            </Form>

            {!isCandidates ? (
                <OverlayTrigger
                    placement="left"
                    delay={{ show: 10, hide: 500 }}
                    overlay={<Tooltip>Выберите 2-4 кандидата!</Tooltip>}
                >
                    <span className="d-inline-block">
                        <Button
                            className={classes.button}
                            disabled={!isCandidates}
                            variant="warning"
                            onClick={redirectHandler}
                        >
                            Сравнить
                        </Button>
                    </span>
                </OverlayTrigger>
            ) : (
                <Button
                    className={classes.button}
                    disabled={!isCandidates}
                    variant="warning"
                    onClick={redirectHandler}
                >
                    Сравнить
                </Button>
            )}
        </div>
    );
});
