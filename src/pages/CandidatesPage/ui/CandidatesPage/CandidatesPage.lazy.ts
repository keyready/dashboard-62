import { lazy } from 'react';

export const CandidatesPageLazy = lazy(async () => await new Promise((res) => {
    setTimeout(() => {
        // @ts-expect-error
        res(import('./CandidatesPage'));
    }, 500);
}));
