export { Candidate } from './model/types/Candidate';
export { CandidateSchema } from './model/types/CandidateSchema';
export {
    CandidateActions,
    CandidateReducer,
} from './model/slice/CandidateSlice';

export {
    getCandidateData,
    getCandidateIsLoading,
    getCandidateError,
} from './model/selectors/CandidateSelector';
