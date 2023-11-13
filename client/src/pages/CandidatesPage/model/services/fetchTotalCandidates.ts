import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

export const fetchTotalCandidates = createAsyncThunk<number, void, ThunkConfig<string>>(
    'candidatesPage/fetchCandidates',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<number>('/api/total_candidates');
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
