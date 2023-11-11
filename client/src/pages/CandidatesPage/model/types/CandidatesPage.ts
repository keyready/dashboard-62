import { Candidate } from 'entities/Candidate';

export interface CandidatesPageSchema {
    candidates?: Candidate[];
    error?: string;
    isLoading?: boolean;
}
