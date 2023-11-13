import { rtkApi } from 'shared/api/rtkApi';
import { Candidate } from 'entities/Candidate';

export interface ComparedCandidatesResult extends Candidate {
    hobbyOverlap: number;
    taskOverlap: number;
    averageScore: number;
}

interface DiagramDatasetInterface {
    label: string;
    data: number[];
}

interface DiagramInterface {
    labels: string[];
    datasets: DiagramDatasetInterface[];
}

export interface ComparedResult {
    comparedCandidates: ComparedCandidatesResult[];
    diagramData: DiagramInterface;
}

const compareCandidatesApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        compareCandidates: build.mutation<ComparedResult, Partial<Candidate>[]>({
            query: (props) => ({
                url: '/api/compare_candidates',
                method: 'POST',
                body: props,
            }),
        }),
    }),
});

export const useComparedCandidates = compareCandidatesApi.useCompareCandidatesMutation;
