import { StateSchema } from 'app/providers/StoreProvider';

export const getComparisonData = (state: StateSchema) => state.comparisonData?.data;
export const getComparisonError = (state: StateSchema) => state.comparisonData?.error;
export const getComparisonIsLoading = (state: StateSchema) => state.comparisonData?.isLoading;
export const getComparisonPurpose = (state: StateSchema) =>
    state.comparisonData?.comparingPurpose || '';
