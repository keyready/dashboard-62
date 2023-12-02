import { createSlice } from '@reduxjs/toolkit';
import { FolderSchema } from '../types/FolderSchema';
// import { fetchFolder } from '../services/fetchFolder';

const initialState: FolderSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const FolderSlice = createSlice({
    name: 'FolderSlice',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchFolder.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(fetchFolder.fulfilled, (state, action: PayloadAction<any>) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //         })
    //         .addCase(fetchFolder.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: FolderActions } = FolderSlice;
export const { reducer: FolderReducer } = FolderSlice;
