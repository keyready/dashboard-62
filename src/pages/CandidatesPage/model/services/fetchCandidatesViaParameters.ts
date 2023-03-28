import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Candidate } from 'entities/Candidate';
import { getPage } from '../selectors/candidatesPageSelectors';

export interface searchParams {
    lowerExp?: number;
    upperExp?: number;
    lowerAge?: number;
    upperAge?: number;
    education?: string;
    speciality?: string;
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
        speciality,
    }, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const page = getPage(getState());

        try {
            const response = await extra.api.get<Candidate[]>(
                '/candidates',
                {
                    params: {
                        age_gte: lowerAge || 0,
                        age_lte: upperAge || 100,
                        experience_gte: lowerExp || 0,
                        experience_lte: upperExp || 100,
                        education: education || '',
                        speciality: speciality || '',
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
