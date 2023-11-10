import { Candidate } from 'entities/Candidate';

export interface CandidatesPageSchema {
    selectedCandidates?: Candidate[];
    error?: string;
    isLoading?: boolean;
}
