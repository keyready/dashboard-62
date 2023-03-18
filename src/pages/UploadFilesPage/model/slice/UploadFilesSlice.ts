import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UploadPageSchema } from '../types/UploadPage';
import { uploadFiles } from '../services/uploadFiles';

const initialState: UploadPageSchema = {
    error: '',
    isLoading: false,
};
export const UploadFilesSlice = createSlice({
    name: 'UploadFilesSlice',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder
            .addCase(uploadFiles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(uploadFiles.fulfilled, (
                state,
            ) => {
                state.isLoading = false;
            })
            .addCase(uploadFiles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }),
});

export const { actions: UploadFilesActions } = UploadFilesSlice;
export const { reducer: UploadFilesReducer } = UploadFilesSlice;
