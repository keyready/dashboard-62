import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Folder } from '../types/Folder';

export const fetchFolderById = createAsyncThunk<Folder, number, ThunkConfig<string>>(
    'Folder/fetchFolderById',
    async (folderId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Folder>('/api/folder/candidates', {
                params: {
                    folderId,
                },
            });

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
