import { rtkApi } from 'shared/api/rtkApi';

interface KeySkill {
    id: number;
    title: string;
}

const fetchKeySkillsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchKeySkills: build.query<KeySkill[], void>({
            query: () => ({
                url: '/api/fetch_key_skills',
            }),
        }),
    }),
});

export const useKeySkills = fetchKeySkillsApi.useFetchKeySkillsQuery;
