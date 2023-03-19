import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComparedData, ComparedDataSchema } from '../types/ComparedData';
import { compareCandidates } from '../services/compareCandidates';

const initialState: ComparedDataSchema = {
    data: {},
    isLoading: false,
    error: '',
};

export const CompareSlice = createSlice({
    name: 'CompareSlice',
    initialState,
    reducers: {
        setComparisonData: (state, action: PayloadAction<ComparedData>) => {
            state.data = action.payload;
        },
        setComparisonError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
    extraReducers: ((builder) => {
        builder
            .addCase(compareCandidates.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(compareCandidates.fulfilled, (
                state,
                action: PayloadAction<ComparedData>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(compareCandidates.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }),
});

export const { actions: CompareActions } = CompareSlice;
export const { reducer: CompareReducer } = CompareSlice;
