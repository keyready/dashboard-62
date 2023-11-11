import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Candidate } from 'entities/Candidate';

export const fetchCandidates = createAsyncThunk<Candidate[], void, ThunkConfig<string>>(
    'candidatesPage/fetchCandidates',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Candidate[]>('/api/candidates', {
                params: {
                    limit: 10,
                    page: 1,
                },
            });
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Ошибка загрузки резюме');
        }
    },
);
