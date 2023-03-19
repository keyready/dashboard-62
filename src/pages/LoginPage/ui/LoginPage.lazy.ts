import { lazy } from 'react';

export const LoginPageLazy = lazy(async () => await new Promise((res) => {
    setTimeout(() => {
        // @ts-expect-error
        res(import('./LoginPage'));
    }, 500);
}));
