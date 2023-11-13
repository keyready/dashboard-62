import { Candidate } from 'entities/Candidate';

export interface CandidatesPageSchema {
    candidates?: Candidate[];
    totalCandidates?: number;
    error?: string;
    isLoading?: boolean;
}
