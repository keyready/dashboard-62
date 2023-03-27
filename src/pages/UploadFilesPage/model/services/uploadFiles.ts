import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { UploadFilesActions, UploadFilesSlice } from '../slice/UploadFilesSlice';

export const uploadFiles = createAsyncThunk<
    string,
    any,
    ThunkConfig<string>
>(
    'files/uploadFiles',
    async (files, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;

        dispatch(UploadFilesActions.setTotalFileSize(0));
        dispatch(UploadFilesActions.setCurrentlyUploaded(0));

        try {
            const response = await extra.api.post<string>('/files_upload', files, {
                onUploadProgress: (progressEvent) => {
                    dispatch(UploadFilesActions.setTotalFileSize(progressEvent.total));
                    dispatch(UploadFilesActions.setCurrentlyUploaded(progressEvent.loaded));
                },
            });

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
