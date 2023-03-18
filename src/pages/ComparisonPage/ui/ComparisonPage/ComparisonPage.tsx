import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import {
    ChangeEvent, memo, useCallback, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { getCandidatesIds, getSelectedCandidates } from 'pages/CandidatesPage';
import { MTable } from 'shared/UI/MTable';
import { Alert, Button, Form } from 'react-bootstrap';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import classes from './ComparisonPage.module.scss';

interface ComparisonPageProps {
    className?: string;
}

const ComparisonPage = memo((props: ComparisonPageProps) => {
    const {
        className,
    } = props;

    const { theme } = useTheme();

    const [selectedTask, setSelectedTask] = useState<string>('');

    const selectedCandidates = useSelector(getSelectedCandidates);
    const selectedCandidatesIds = useSelector(getCandidatesIds);

    const changeTaskHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedTask(e.target.value);
    }, []);

    const backendComparingHandler = useCallback(() => {

    }, []);

    const tasksTypes = useMemo<string[]>(() => [
        'Создание лендинг-страницы',
        'Разработка Frontend-части приложения',
        'Разработка Backend-части приложения',
        'Разработка Fullstack-приложения',
        'Разработка ПО для OC Windows',
        'Разработка ПО для OC Linux',
        'Анализ уязвимости приложения',
        'Дебажинг и тесты приложения',
    ], []);

    if (!selectedCandidates.length) {
        return (
            <Page className={classNames(classes.ComparisonPage, {}, [className])}>
                <Alert
                    variant="warning"
                >
                    Похоже, Вы попали на эту страницу по ошибке.
                    Вернитесь на
                    {' '}
                    <Alert.Link href="/">главную</Alert.Link>
                    {' '}
                    или
                    {' '}
                    <Alert.Link href="/candidates">на страницу сравнения кандидатов</Alert.Link>
                </Alert>
            </Page>
        );
    }

    return (
        <Page className={classNames(classes.ComparisonPage, {}, [className])}>
            <h2 className={classes.header}>Выбранные кандидаты</h2>
            <MTable tableData={selectedCandidates} />
            <Form.Select
                className={classes.select}
                onChange={changeTaskHandler}
                value={selectedTask || ''}
            >
                <option disabled>Выберите цель рекрутинга кандидатов</option>
                {tasksTypes.map((tasksType) => (
                    <option key={tasksType}>
                        {tasksType}
                    </option>
                ))}
            </Form.Select>
            <Button
                variant={theme === Theme.DARK ? 'info' : 'dark'}
                disabled={!selectedTask}
                onClick={backendComparingHandler}
            >
                Перейти к углубленному сравнению
            </Button>
        </Page>
    );
});

export default ComparisonPage;
