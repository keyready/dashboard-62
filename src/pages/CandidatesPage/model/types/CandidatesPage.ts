import { Candidate } from 'entities/Candidate';
import { EntityState } from '@reduxjs/toolkit';

export interface SearchParams {
    upperAge?: number;
    lowerAge?: number;
    upperExp?: number;
    lowerExp?: number;
    education?: string;
    speciality?: string;

}

export interface CandidatesPageSchema extends EntityState<Candidate> {
    selectedCandidates?: Candidate[];
    selectedIdsToCompare?: number[];
    error?: string;
    isLoading?: boolean
    searchParams: SearchParams;
}
