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

interface QueryBody {
    candidates: Partial<Candidate>[];
    task: string;
}

const compareCandidatesApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        compareCandidates: build.mutation<ComparedResult, QueryBody>({
            query: (props) => {
                const body = {
                    candidatesIds: props.candidates.map((candidate) => candidate.id),
                    task: props.task,
                };
                return {
                    url: '/api/compare_candidates',
                    method: 'POST',
                    body,
                };
            },
        }),
    }),
});

export const useComparedCandidates = compareCandidatesApi.useCompareCandidatesMutation;
