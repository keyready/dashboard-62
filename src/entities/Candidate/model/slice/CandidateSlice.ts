import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Candidate } from 'entities/Candidate';
import { CandidateSchema } from '../types/CandidateSchema';
import { fetchCandidateById } from '../services/fetchCandidateById';

const initialState: CandidateSchema = {
    data: {},
    isLoading: false,
    error: undefined,
};

export const CandidateSlice = createSlice({
    name: 'CandidateSlice',
    initialState,
    reducers: {
        setCandidateData: (state, action: PayloadAction<Candidate>) => {
            state.data = action.payload;
        },
    },
    extraReducers: ((builder) => {
        builder
            .addCase(fetchCandidateById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCandidateById.fulfilled, (
                state,
                action: PayloadAction<any>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCandidateById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }),
});

export const { actions: CandidateActions } = CandidateSlice;
export const { reducer: CandidateReducer } = CandidateSlice;
