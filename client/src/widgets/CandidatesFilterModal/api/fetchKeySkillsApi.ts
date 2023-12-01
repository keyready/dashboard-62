import { rtkApi } from 'shared/api/rtkApi';

const fetchKeySkillsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchKeySkills: build.query<string[], void>({
            query: () => ({
                url: '/api/fetch_key_skills',
            }),
        }),
    }),
});

export const useKeySkills = fetchKeySkillsApi.useFetchKeySkillsQuery;
