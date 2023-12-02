import { createSlice } from '@reduxjs/toolkit';
import { createFolder } from '../services/createFolder';
import { FolderSchema } from '../types/FolderSchema';

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
            });
    },
});

export const { actions: FolderActions } = FolderSlice;
export const { reducer: FolderReducer } = FolderSlice;
