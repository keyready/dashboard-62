import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

interface CreateFolderManuallyProps {
    folderTitle: string;
    groupingRule: string;
    candidatesIds: number[];
}

export const createFolderManually = createAsyncThunk<
    string,
    CreateFolderManuallyProps,
    ThunkConfig<string>
>('Folder/createFolderManually', async (props, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.post<string>('/api/folder/manual_create', props);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
