import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Dataset } from '../types/Dataset';

export const fetchDataset = createAsyncThunk<Dataset, string, ThunkConfig<string>>(
    'AllocationPage/fetchDataset',
    async (allocationMethod, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Dataset>('/api/get_allocation', {
                params: {
                    allocationMethod,
                },
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
