import { StateSchema } from 'app/providers/StoreProvider';

export const getCandidatesError = (state: StateSchema) => state.candidates?.error;
export const getCandidatesIsLoading = (state: StateSchema) => state.candidates?.isLoading || false;
export const getCandidatesIds = (state: StateSchema) =>
    state.candidates?.selectedIdsToCompare || [];

export const getSelectedCandidates = (state: StateSchema) =>
    state.candidates?.selectedCandidates || [];

export const getLowerAge = (state: StateSchema) => state.candidates?.searchParams.lowerAge;
export const getUpperAge = (state: StateSchema) => state.candidates?.searchParams.upperAge;
export const getLowerExp = (state: StateSchema) => state.candidates?.searchParams.lowerExp;
export const getUpperExp = (state: StateSchema) => state.candidates?.searchParams.upperExp;
export const getEducationSearch = (state: StateSchema) =>
    state.candidates?.searchParams.education || '';
export const getSpecialitySearch = (state: StateSchema) =>
    state.candidates?.searchParams.speciality || '';
export const getPage = (state: StateSchema) => state.candidates?.searchParams.page || 1;
export const getHasMore = (state: StateSchema) => state.candidates?.hasMore;
