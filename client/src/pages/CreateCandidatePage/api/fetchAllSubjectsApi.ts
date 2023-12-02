import { rtkApi } from 'shared/api/rtkApi';
import { Subject } from 'entities/Subject';

const fetchSubjectsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchSubjects: build.query<Subject[], void>({
            query: () => ({
                url: '/api/subjects/fetch',
            }),
        }),
    }),
});

export const useSubjects = fetchSubjectsApi.useFetchSubjectsQuery;
