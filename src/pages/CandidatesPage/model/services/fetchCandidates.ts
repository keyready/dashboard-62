import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Candidate } from 'entities/Candidate';

export const fetchCandidates = createAsyncThunk<
    Candidate[],
    void,
    ThunkConfig<string>
>(
    'candidatesPage/fetchCandidates',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Candidate[]>(
                '/candidates',
            );
            if (!response.data) {
                throw new Error();
            }

            console.log(response.data);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Ошибка загрузки резюме');
        }
    },
);
