import { createSlice } from '@reduxjs/toolkit';
import { createFolder } from '../services/createFolder';
import { FolderSchema } from '../types/FolderSchema';
import { createFolderManually } from '../services/createFolderManually';

const initialState: FolderSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const FolderSlice = createSlice({
    name: 'FolderSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createFolder.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(createFolder.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(createFolder.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(createFolderManually.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(createFolderManually.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(createFolderManually.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: FolderActions } = FolderSlice;
export const { reducer: FolderReducer } = FolderSlice;
