import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

interface DeleteCandidateFolderProps {
    candidateId: number;
    folderId: number;
}

export const deleteCandidateFolder = createAsyncThunk<
    string,
    DeleteCandidateFolderProps,
    ThunkConfig<string>
>('Candidate/deleteCandidateFolder', async (props, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.post<string>('/api/candidate/delete', props);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
