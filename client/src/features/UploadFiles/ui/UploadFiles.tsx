import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import {
    FileUpload,
    FileUploadHeaderTemplateOptions,
    FileUploadRemoveEvent,
    FileUploadSelectEvent,
} from 'primereact/fileupload';
import { HStack } from 'shared/UI/Stack';
import { pluralize } from 'shared/lib/pluralize/pluralize';
import classes from './UploadFiles.module.scss';

interface UploadFilesProps {
    className?: string;
}

export const UploadFiles = memo((props: UploadFilesProps) => {
    const { className } = props;

    const [totalSize, setTotalSize] = useState<number>(0);
    const [totalFiles, setTotalFiles] = useState<number>(0);

    const onTemplateSelect = (e: FileUploadSelectEvent) => {
        let _totalSize = 0;
        let _totalFiles = 0;
        const { files } = e;

        for (let i = 0; i < files.length; i += 1) {
            _totalSize += files[i].size || 0;
            _totalFiles += 1;
        }

        setTotalSize(_totalSize);
        setTotalFiles(_totalFiles);
    };

    function headerTemplate(options: FileUploadHeaderTemplateOptions) {
        const { className, uploadButton, cancelButton, chooseButton } = options;

        return (
            <div className={classNames(classes.uploadHeader, {}, [className])}>
                <HStack gap="8">
                    {chooseButton}
                    {uploadButton}
                    {cancelButton}
                </HStack>

                <div>
                    <h2>
                        Вы выбрали {pluralize(totalFiles)} файлов на{' '}
                        {(totalSize / 1000000).toFixed(1)} МБ
                    </h2>
                </div>
            </div>
        );
    }

    const onTemplateClear = useCallback(() => {
        setTotalSize(0);
        setTotalFiles(0);
    }, []);

    const onTemplateRemove = (event: FileUploadRemoveEvent) => {
        setTotalSize((prevState) => prevState - event.file.size);
        setTotalFiles((prevState) => prevState - 1);
    };

    return (
        <FileUpload
            onSelect={onTemplateSelect}
            headerTemplate={headerTemplate}
            onClear={onTemplateClear}
            onRemove={onTemplateRemove}
            chooseLabel="Выберите файлы"
            uploadLabel="Загрузить"
            cancelLabel="Отменить"
            mode="advanced"
            name="demo[]"
            url="http://localhost:9999/api/upload"
            accept="application/zip,application/x-rar-compressed,application/x-tar,application/gzip,application/x-bzip2"
            multiple
        />
    );
});
