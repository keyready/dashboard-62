import { StateSchema } from 'app/providers/StoreProvider';

export const getIsFilesLoading = (state: StateSchema) => state.filesUpload?.isLoading;
export const getFilesUploadingError = (state: StateSchema) => state.filesUpload?.error;
export const getCurrentlyUploaded = (
    state: StateSchema,
) => state.filesUpload?.currentlyUploaded || 0;
export const getTotalSize = (state: StateSchema) => state.filesUpload?.totalFileSize || 1;
