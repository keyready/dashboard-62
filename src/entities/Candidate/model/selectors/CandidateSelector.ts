import { StateSchema } from 'app/providers/StoreProvider';

export const getCandidateData = (state: StateSchema) => state.candidate?.data;
export const getCandidateIsLoading = (state: StateSchema) => state.candidate?.isLoading;
export const getCandidateError = (state: StateSchema) => state.candidate?.error;
