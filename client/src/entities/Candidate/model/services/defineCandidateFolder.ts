import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

interface DefineCandidateFolderProps {
    candidateIds: number[];
    folderId: number;
}

export const defineCandidateFolder = createAsyncThunk<
    string,
    DefineCandidateFolderProps,
    ThunkConfig<string>
>('Candidate/defineCandidateFolder', async (props, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.post<string>('/api/candidate/define');

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
