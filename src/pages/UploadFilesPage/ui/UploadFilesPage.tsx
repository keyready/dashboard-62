import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import {
    FormEvent, memo, useCallback, useState,
} from 'react';
import {
    Alert, Button, Form, ProgressBar,
} from 'react-bootstrap';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useNavigate } from 'react-router-dom';
import {
    getCurrentlyUploaded,
    getFilesUploadingError,
    getIsFilesLoading,
    getTotalSize,
} from '../model/selectors/getUploadfilesPageData';
import { UploadFilesReducer } from '../model/slice/UploadFilesSlice';
import classes from './UploadFilesPage.module.scss';
import { uploadFiles } from '../model/services/uploadFiles';

interface UploadFilesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    filesUpload: UploadFilesReducer,
};

const UploadFilesPage = memo((props: UploadFilesPageProps) => {
    const {
        className,
    } = props;

    const { theme } = useTheme();
    const navigate = useNavigate();
    const uploadError = useSelector(getFilesUploadingError);
    const isFilesUploading = useSelector(getIsFilesLoading);
    const currentlyUploaded = useSelector(getCurrentlyUploaded);
    const totalSize = useSelector(getTotalSize);
    const dispatch = useAppDispatch();

    const [isUploadSuccessful, setIsUploadSuccessful] = useState<boolean>(false);
    const [hasDuplicates, setHasDuplicates] = useState<string>('');

    const submitFilesHandler = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const result = await dispatch(uploadFiles(formData));
        if (result.meta.requestStatus === 'fulfilled') {
            setIsUploadSuccessful(true);
            // @ts-ignore
            if (result?.payload?.message?.includes('существуют')) {
                // @ts-ignore
                setHasDuplicates(result?.payload?.message);
            }
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(classes.UploadFilesPage, {}, [className])}>
                <Form
                    onSubmit={submitFilesHandler}
                    encType="multipart/form-data"
                >
                    <h2>Загрузка новых данных о кандидатах</h2>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>
                            Выберите архив с анкетами.
                        </Form.Label>
                        <Form.Control
                            disabled={isFilesUploading}
                            id="files"
                            name="files"
                            required
                            accept=".zip,.rar,.7z"
                            type="file"
                        />
                    </Form.Group>

                    {isFilesUploading && (
                        <ProgressBar
                            className={classes.progress}
                            animated
                            variant="success"
                            label={`${(currentlyUploaded / totalSize * 100).toFixed(2)}%`}
                            now={currentlyUploaded / totalSize * 100}
                        />
                    )}

                    {uploadError && (
                        <Alert variant="danger">
                            {uploadError}
                        </Alert>
                    )}
                    {isUploadSuccessful && (
                        <Alert
                            variant={hasDuplicates ? 'warning' : 'success'}
                        >
                            {hasDuplicates
                                ? (
                                    <p>{hasDuplicates}</p>
                                )
                                : (<p>Все анкеты успешно добавлены</p>)}
                            <Button
                                variant={theme === Theme.LIGHT ? 'success' : 'success-dark'}
                                onClick={() => navigate('/candidates')}
                            >
                                Перейти на страницу сравнения
                            </Button>
                        </Alert>
                    )}

                    {!isFilesUploading && !isUploadSuccessful && (
                        <Button
                            disabled={isFilesUploading}
                            type="submit"
                            variant={theme === Theme.DARK ? 'info' : 'dark'}
                        >
                            Отправить анкеты
                        </Button>
                    )}
                </Form>
            </Page>
        </DynamicModuleLoader>
    );
});

export default UploadFilesPage;
