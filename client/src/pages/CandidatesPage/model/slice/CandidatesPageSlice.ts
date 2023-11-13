import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTotalCandidates } from 'pages/CandidatesPage';
import { CandidatesPageSchema } from '../types/CandidatesPage';

const initialState: CandidatesPageSchema = {};

export const CandidatesPageSlice = createSlice({
    name: 'CandidatesPageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTotalCandidates.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTotalCandidates.fulfilled, (state, action: PayloadAction<number>) => {
                state.isLoading = false;
                state.totalCandidates = action.payload;
            })
            .addCase(fetchTotalCandidates.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: CandidatesPageActions } = CandidatesPageSlice;
export const { reducer: CandidatesPageReducer } = CandidatesPageSlice;
