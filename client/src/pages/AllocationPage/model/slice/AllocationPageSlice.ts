import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDataset } from '../services/fetchDataset';
import { AllocationPageSchema, Dataset } from '../types/Dataset';

const initialState: AllocationPageSchema = {
    isLoading: false,
};

export const AllocationPageSlice = createSlice({
    name: 'AllocationPageSliceSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataset.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchDataset.fulfilled, (state, action: PayloadAction<Dataset>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchDataset.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: AllocationPageActions } = AllocationPageSlice;
export const { reducer: AllocationPageReducer } = AllocationPageSlice;
