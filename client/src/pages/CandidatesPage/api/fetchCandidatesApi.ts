import { rtkApi } from 'shared/api/rtkApi';
import { Candidate } from 'entities/Candidate';
import { FilterOptions } from 'widgets/CandidatesFilterModal';

export interface QueryProps {
    page: number;
    limit: number;
    filterOptions?: FilterOptions;
}

const fetchCandidatesApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCandidates: build.query<Candidate[], QueryProps>({
            query: (props) => ({
                url: '/api/candidates',
                params: {
                    page: props.page,
                    limit: props.limit,
                    ...props.filterOptions,
                },
            }),
        }),
    }),
});

export const useCandidates = fetchCandidatesApi.useFetchCandidatesQuery;
