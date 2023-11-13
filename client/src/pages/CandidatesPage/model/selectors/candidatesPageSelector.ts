import { StateSchema } from 'app/providers/StoreProvider';

export const getTotalCandidates = (state: StateSchema) => state.candidates?.totalCandidates;
