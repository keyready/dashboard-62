import { StateSchema } from 'app/providers/StoreProvider';

export const getSelectedCandidates = (state: StateSchema) => state.candidates?.selected;
