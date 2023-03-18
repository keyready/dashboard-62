import { lazy } from 'react';

export const ComparisonPageLazy = lazy(async () => await new Promise((res) => {
    setTimeout(() => {
        // @ts-expect-error
        res(import('./ComparisonPage'));
    }, 500);
}));
