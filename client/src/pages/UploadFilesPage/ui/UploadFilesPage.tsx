import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { UploadFiles } from 'features/UploadFiles';
import { UploadFilesReducer } from '../model/slice/UploadFilesSlice';
import classes from './UploadFilesPage.module.scss';

interface UploadFilesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    filesUpload: UploadFilesReducer,
};

const UploadFilesPage = memo((props: UploadFilesPageProps) => {
    const { className } = props;

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(classes.UploadFilesPage, {}, [className])}>
                <UploadFiles />
            </Page>
        </DynamicModuleLoader>
    );
});

export default UploadFilesPage;
