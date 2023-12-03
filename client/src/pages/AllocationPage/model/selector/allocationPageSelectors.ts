import { StateSchema } from 'app/providers/StoreProvider';

export const getDataset = (state: StateSchema) => state.allocationPage?.data;
export const getDatasetIsLoading = (state: StateSchema) => state.allocationPage?.isLoading;
export const getDatasetError = (state: StateSchema) => state.allocationPage?.error;
