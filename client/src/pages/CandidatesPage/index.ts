export { CandidatesPageLazy as CandidatesPage } from './ui/CandidatesPage/CandidatesPage.lazy';

export { CandidatesPageSchema } from './model/types/CandidatesPage';
export { compareCandidatesByIds } from './model/services/compareCandidatesByIds';
export { fetchTotalCandidates } from './model/services/fetchTotalCandidates';
export { CandidatesPageActions, CandidatesPageReducer } from './model/slice/CandidatesPageSlice';
