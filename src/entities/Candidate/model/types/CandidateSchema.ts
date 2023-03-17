import { Candidate } from './Candidate';

export interface CandidateSchema {
    data?: Candidate;
    isLoading: boolean;
    error?: string;
}
