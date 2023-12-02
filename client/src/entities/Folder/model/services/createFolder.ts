import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

interface CreateFolderProps {
    folderTitle: string;
    params: {
        param: string;
        value: string;
    };
}

export const createFolder = createAsyncThunk<string, CreateFolderProps, ThunkConfig<string>>(
    'Folder/createFolder',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<string>('/api/folder/create', props);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
