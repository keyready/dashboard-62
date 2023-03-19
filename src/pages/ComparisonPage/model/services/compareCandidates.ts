import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { CompareActions } from '../slice/CompareSlice';
import { ComparedData } from '../types/ComparedData';

export interface ComparisonProps {
    candidatesIds?: number[];
    comparisonPurpose?: string
}
export const compareCandidates = createAsyncThunk<
    ComparedData,
    ComparisonProps,
    ThunkConfig<string>
>(
    'comparisonPage/compareCandidates',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;

        try {
            const response = await extra.api.post<ComparedData>(
                '/compare_candidates',
                {
                    candidatesIds: props.candidatesIds,
                    comparisonPurpose: props.comparisonPurpose,
                },
            );

            if (!response.data) {
                throw new Error();
            }

            dispatch(CompareActions.setComparisonData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Ошибка во время сравнения кандидатов');
        }
    },
);
