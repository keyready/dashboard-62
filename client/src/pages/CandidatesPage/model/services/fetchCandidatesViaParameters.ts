import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Candidate } from 'entities/Candidate';

export const fetchCandidatesViaParameters = createAsyncThunk<
    Candidate[],
    void,
    ThunkConfig<string>
>('candidatesPage/fetchCandidatesViaParameters', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    try {
        const response = await extra.api.get<Candidate[]>('/candidates', {
            params: {},
        });
        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
