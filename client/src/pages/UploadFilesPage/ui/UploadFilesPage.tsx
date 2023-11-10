import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { UploadFiles } from 'features/UploadFiles';
import { Card } from 'shared/UI/Card';
import { Text } from 'shared/UI/Text';
import { HStack } from 'shared/UI/Stack';
import classes from './UploadFilesPage.module.scss';
import { UploadFilesReducer } from '../model/slice/UploadFilesSlice';

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
                <HStack justify="start">
                    <Card className={classes.card}>
                        <Text
                            align="left"
                            size="large"
                            className={classes.textBlock}
                            title="Загрузка резюме"
                        />
                    </Card>
                </HStack>

                <UploadFiles />
            </Page>
        </DynamicModuleLoader>
    );
});

export default UploadFilesPage;
