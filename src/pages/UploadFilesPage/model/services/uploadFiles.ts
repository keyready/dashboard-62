import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

export const uploadFiles = createAsyncThunk<
    string,
    any,
    ThunkConfig<string>
>(
    'files/uploadFiles',
    async (files, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<string>('/files_upload', files);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Error during files upload');
        }
    },
);
