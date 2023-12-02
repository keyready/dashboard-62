import { StateSchema } from 'app/providers/StoreProvider';

export const getFolderData = (state: StateSchema) => state.folder?.data;
export const getFolderIsLoading = (state: StateSchema) => state.folder?.isLoading;
export const getFolderError = (state: StateSchema) => state.folder?.error;
