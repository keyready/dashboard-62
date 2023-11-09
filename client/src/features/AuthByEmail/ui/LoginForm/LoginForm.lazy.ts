import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormLazy = lazy<FC<LoginFormProps>>(
    async () =>
        new Promise((res) => {
            setTimeout(() => {
                res(import('./LoginForm'));
            }, LOADING_DELAY);
        }),
);
