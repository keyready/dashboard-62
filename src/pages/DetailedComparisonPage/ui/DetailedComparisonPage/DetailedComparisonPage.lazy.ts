import { lazy } from 'react';

export const DetailedComparisonPageLazy = lazy(async () => await new Promise((res) => {
    setTimeout(() => {
        // @ts-expect-error
        res(import('./DetailedComparisonPage'));
    }, 500);
}));
