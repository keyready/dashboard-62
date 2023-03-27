import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Candidate } from 'entities/Candidate';
import { getPage } from '../selectors/candidatesPageSelectors';

export const fetchCandidates = createAsyncThunk<
    Candidate[],
    void,
    ThunkConfig<string>
>(
    'candidatesPage/fetchCandidates',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const page = getPage(getState());

        try {
            const response = await extra.api.get<Candidate[]>(
                '/candidates',
                {
                    params: {
                        limit: 10,
                        page,
                    },
                },
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
