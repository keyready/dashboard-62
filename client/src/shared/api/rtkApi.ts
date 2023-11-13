import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_AUTHORIZATION_TOKEN } from 'shared/const';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers: Headers) => {
            const token = localStorage.getItem(USER_AUTHORIZATION_TOKEN) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});
