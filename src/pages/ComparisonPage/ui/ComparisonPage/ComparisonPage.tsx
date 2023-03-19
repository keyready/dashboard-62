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
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    compareCandidates, CompareActions, CompareReducer, getComparisonError, getComparisonIsLoading,
} from 'pages/ComparisonPage';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import classes from './ComparisonPage.module.scss';

interface ComparisonPageProps {
    className?: string;
}

const reducers: ReducersList = {
    comparisonData: CompareReducer,
};

const ComparisonPage = memo((props: ComparisonPageProps) => {
    const {
        className,
    } = props;

    const { theme } = useTheme();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [selectedTask, setSelectedTask] = useState<string>('');

    const selectedCandidates = useSelector(getSelectedCandidates);
    const selectedCandidatesIds = useSelector(getCandidatesIds);
    const compareError = useSelector(getComparisonError);
    const compareIsProcessing = useSelector(getComparisonIsLoading);

    const changeTaskHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(CompareActions.setComparisonError(''));
        setSelectedTask(e.target.value);
    }, [dispatch]);

    const backendComparingHandler = useCallback(async () => {
        const result = await dispatch(compareCandidates({
            candidatesIds: selectedCandidatesIds,
            comparisonPurpose: selectedTask,
        }));

        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/detailed_comparison');
        } else {
            console.log('Что-то пошло не так во время сравнения кандидатов');
        }
    }, [dispatch, navigate, selectedCandidatesIds, selectedTask]);

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
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
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

                {compareError && (
                    <Alert variant="danger">
                        {compareError}
                    </Alert>
                )}

                <Button
                    variant={theme === Theme.DARK ? 'info' : 'dark'}
                    disabled={!selectedTask || compareIsProcessing}
                    onClick={backendComparingHandler}
                >
                    Перейти к углубленному сравнению
                </Button>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ComparisonPage;
