import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Candidate } from 'entities/Candidate';

export interface searchParams {
    lowerExp?: number;
    upperExp?: number;
    lowerAge?: number;
    upperAge?: number;
    education?: string;
}

export const fetchCandidatesViaParameters = createAsyncThunk<
    Candidate[],
    searchParams,
    ThunkConfig<string>
>(
    'candidatesPage/fetchCandidatesViaParameters',
    async ({
        lowerAge,
        upperAge,
        upperExp,
        lowerExp,
        education,
    }, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<Candidate[]>(
                '/candidates',
                {
                    params: {
                        age_gte: lowerAge,
                        age_lte: upperAge,
                        experience_gte: lowerExp,
                        experience_lte: upperExp,
                        _q: education,
                    },
                },
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
