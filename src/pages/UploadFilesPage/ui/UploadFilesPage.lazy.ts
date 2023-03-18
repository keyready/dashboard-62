import { lazy } from 'react';

export const UploadFilesPageLazy = lazy(async () => await new Promise((res) => {
    setTimeout(() => {
        // @ts-expect-error
        res(import('./UploadFilesPage'));
    }, 500);
}));
