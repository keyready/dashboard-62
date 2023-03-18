export {
    CandidatesPageLazy as CandidatesPage,
} from './ui/CandidatesPage/CandidatesPage.lazy';

export { CandidatesPageSchema } from './model/types/CandidatesPage';
export {
    getCandidatesError,
    getCandidatesIsLoading,
    getCandidatesIds,
    getSelectedCandidates,
    getLowerAge,
    getUpperAge,
    getLowerExp,
    getUpperExp,
    getSearchString,
} from './model/selectors/candidatesPageSelectors';
export { compareCandidatesByIds } from './model/services/compareCandidatesByIds';
export { fetchCandidates } from './model/services/fetchCandidates';
export { CandidatesPageActions, CandidatesPageReducer } from './model/slice/CandidatesPageSlice';
