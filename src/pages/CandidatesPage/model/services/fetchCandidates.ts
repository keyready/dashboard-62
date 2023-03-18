import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { CandidatesPageActions } from 'pages/CandidatesPage';
import { Candidate } from 'entities/Candidate';

export const fetchCandidates = createAsyncThunk<
    Candidate[],
    void,
    ThunkConfig<string>
>(
    'candidatesPage/fetchCandidates',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<Candidate[]>(
                '/candidates',
            );
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
