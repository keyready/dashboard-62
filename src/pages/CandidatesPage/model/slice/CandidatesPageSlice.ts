import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Candidate } from 'entities/Candidate';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchCandidates } from 'pages/CandidatesPage';
import { CandidatesPageSchema } from '../types/CandidatesPage';
import { fetchCandidatesViaParameters } from '../services/fetchCandidatesViaParameters';

const candidatesAdapter = createEntityAdapter<Candidate>({
    selectId: (candidate) => candidate.id || 0,
});

export const getComparedCandidates = candidatesAdapter.getSelectors<StateSchema>(
    (state) => state.candidates || candidatesAdapter.getInitialState(),
);

export const CandidatesPageSlice = createSlice({
    name: 'CandidatesPageSlice',
    initialState: candidatesAdapter.getInitialState<CandidatesPageSchema>({
        ids: [],
        entities: {},
        selectedCandidates: [],
        selectedIdsToCompare: [],
        isLoading: false,
        error: '',
        searchParams: {},
        hasMore: true,
    }),
    reducers: {
        setSelectedCandidates: (state, action: PayloadAction<Candidate[]>) => {
            state.selectedCandidates = action.payload;
        },
        setSelectedIds: (state, action: PayloadAction<number[]>) => {
            state.selectedIdsToCompare = action.payload;
        },

        setPage: (state, action: PayloadAction<number>) => {
            state.searchParams.page = action.payload;
        },

        setLowerAge: (state, action:PayloadAction<number | undefined>) => {
            state.searchParams.lowerAge = action.payload;
        },
        setUpperAge: (state, action:PayloadAction<number | undefined>) => {
            state.searchParams.upperAge = action.payload;
        },
        setLowerExp: (state, action:PayloadAction<number | undefined>) => {
            state.searchParams.lowerExp = action.payload;
        },
        setUpperExp: (state, action:PayloadAction<number | undefined>) => {
            state.searchParams.upperExp = action.payload;
        },
        setEducationSearch: (state, action:PayloadAction<string>) => {
            state.searchParams.education = action.payload;
        },
        setSpecialitySearch: (state, action:PayloadAction<string>) => {
            state.searchParams.speciality = action.payload;
        },
    },
    extraReducers: ((builder) => {
        builder
        // .addCase(compareCandidatesByIds.pending, (state) => {
        //     state.error = undefined;
        //     state.isLoading = true;
        // })
        // .addCase(compareCandidatesByIds.fulfilled, (
        //     state,
        //     action: PayloadAction<any>,
        // ) => {
        //     state.isLoading = false;
        //     state.selectedCandidates
        // })
        // .addCase(compareCandidatesByIds.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // })

            .addCase(fetchCandidates.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCandidates.fulfilled, (
                state,
                action: PayloadAction<any>,
            ) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= 10;
                candidatesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCandidates.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(fetchCandidatesViaParameters.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCandidatesViaParameters.fulfilled, (
                state,
                action: PayloadAction<any>,
            ) => {
                state.isLoading = false;
                candidatesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCandidatesViaParameters.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }),
});

export const { actions: CandidatesPageActions } = CandidatesPageSlice;
export const { reducer: CandidatesPageReducer } = CandidatesPageSlice;
