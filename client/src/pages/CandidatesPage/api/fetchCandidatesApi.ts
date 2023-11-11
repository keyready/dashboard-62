import { rtkApi } from 'shared/api/rtkApi';
import { Candidate } from 'entities/Candidate';

const fetchCandidatesApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCandidates: build.query<Candidate[], number>({
            query: (page) => ({
                url: '/api/candidates',
                params: {
                    page,
                    limit: 10,
                },
            }),
        }),
    }),
});

export const useCandidates = fetchCandidatesApi.useFetchCandidatesQuery;
