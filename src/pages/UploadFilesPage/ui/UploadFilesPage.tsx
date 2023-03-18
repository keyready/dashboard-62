import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { FormEvent, memo, useCallback } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
    getFilesUploadingError,
    getIsFilesLoading,
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

    const uploadError = useSelector(getFilesUploadingError);
    const isFilesUploading = useSelector(getIsFilesLoading);

    const dispatch = useAppDispatch();

    const submitFilesHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        dispatch(uploadFiles(formData));
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
                            Выберите архив с анкетами. Допустимые форматы анкет: .xml, .json
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

                    {uploadError && (
                        <Alert variant="danger">
                            {uploadError}
                        </Alert>
                    )}

                    <Button
                        disabled={isFilesUploading}
                        type="submit"
                        variant={theme === Theme.DARK ? 'info' : 'dark'}
                    >
                        Отправить анкеты
                    </Button>
                </Form>
            </Page>
        </DynamicModuleLoader>
    );
});

export default UploadFilesPage;
