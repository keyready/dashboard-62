import { rtkApi } from 'shared/api/rtkApi';
import { Candidate } from 'entities/Candidate';
import { FilterOptions } from 'widgets/CandidatesFilterModal';

export interface QueryProps {
    page: number;
    limit: number;
    filterOptions?: any;
}

const fetchCandidatesApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCandidates: build.query<Candidate[], QueryProps>({
            query: ({ page, limit, filterOptions }) => ({
                url: '/api/candidates',
                params: { page, limit, ...filterOptions },
            }),
        }),
    }),
});

export const useCandidates = fetchCandidatesApi.useFetchCandidatesQuery;
