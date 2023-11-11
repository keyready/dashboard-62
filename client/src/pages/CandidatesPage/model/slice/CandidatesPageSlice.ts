import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCandidates } from 'pages/CandidatesPage';
import { CandidatesPageSchema } from '../types/CandidatesPage';
import { fetchCandidatesViaParameters } from '../services/fetchCandidatesViaParameters';

const initialState: CandidatesPageSchema = {};

export const CandidatesPageSlice = createSlice({
    name: 'CandidatesPageSlice',
    initialState,
    reducers: {
        setSelected(state, action: PayloadAction<number[]>) {
            state.selected = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCandidates.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCandidates.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
            })
            .addCase(fetchCandidates.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(fetchCandidatesViaParameters.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCandidatesViaParameters.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.isLoading = false;
                },
            )
            .addCase(fetchCandidatesViaParameters.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: CandidatesPageActions } = CandidatesPageSlice;
export const { reducer: CandidatesPageReducer } = CandidatesPageSlice;
