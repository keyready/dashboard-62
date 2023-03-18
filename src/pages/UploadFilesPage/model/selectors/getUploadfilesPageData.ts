import { StateSchema } from 'app/providers/StoreProvider';

export const getIsFilesLoading = (state: StateSchema) => state.filesUpload?.isLoading;
export const getFilesUploadingError = (state: StateSchema) => state.filesUpload?.error;
