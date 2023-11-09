/**
 * Функция сравнения кандидатов по id.
 *
 * На вход принимает массив id'шников, в ответ отдает массив кандидатов, отсортированных по баллам
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Candidate } from 'entities/Candidate';

export const compareCandidatesByIds = createAsyncThunk<Candidate[], number[], ThunkConfig<string>>(
    'candidatesPage/compareCandidates',
    async (candidatesIds, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<Candidate[]>('/compare_candidates', {
                candidatesIds,
            });
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
