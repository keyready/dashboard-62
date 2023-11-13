import { rtkApi } from 'shared/api/rtkApi';
import { Candidate } from 'entities/Candidate';

export interface QueryProps {
    page: number;
    limit: number;
}

const fetchCandidatesApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCandidates: build.query<Candidate[], QueryProps>({
            query: (props) => ({
                url: '/api/candidates',
                params: {
                    page: props.page,
                    limit: props.limit,
                },
            }),
        }),
    }),
});

export const useCandidates = fetchCandidatesApi.useFetchCandidatesQuery;
