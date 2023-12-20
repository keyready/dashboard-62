import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Dataset } from '../types/Dataset';

interface fetchDatasetProps {
    allocationData: string;
    allocationType: string;
}

export const fetchDataset = createAsyncThunk<Dataset, fetchDatasetProps, ThunkConfig<string>>(
    'AllocationPage/fetchDataset',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Dataset>('/api/get_allocation', {
                params: {
                    props,
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
