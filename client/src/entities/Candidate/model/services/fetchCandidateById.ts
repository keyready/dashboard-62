import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { CandidateActions } from 'entities/Candidate/model/slice/CandidateSlice';
import { Candidate } from '../types/Candidate';

export const fetchCandidateById = createAsyncThunk<Candidate, string, ThunkConfig<string>>(
    'Candidate/fetchCandidateById',
    async (CandidateId, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<Candidate>('/url');

            if (!response.data) {
                throw new Error();
            }

            dispatch(CandidateActions.setCandidateData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
