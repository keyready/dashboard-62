import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CandidateSchema } from '../types/CandidateSchema';

const initialState: CandidateSchema = {};

export const CandidateSlice = createSlice({
    name: 'CandidateSlice',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder
            .addCase(_.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(_.fulfilled, (
                state,
                action: PayloadAction<any>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(_.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }),
});

export const { actions: CandidateActions } = CandidateSlice;
export const { reducer: CandidateReducer } = CandidateSlice;
