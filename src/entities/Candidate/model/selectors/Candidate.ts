import { StateSchema } from 'app/providers/StoreProvider';

export const getCandidateData = (state: StateSchema) => state.$?.data;
export const getCandidateIsLoading = (state: StateSchema) => state.$?.isLoading;
export const getCandidateError = (state: StateSchema) => state.$?.error;
