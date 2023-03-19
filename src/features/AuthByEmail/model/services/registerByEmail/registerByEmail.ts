import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

interface RegisterByEmailProps {
    email: string;
    password: string;
}

export const registerByEmail = createAsyncThunk<User, RegisterByEmailProps, ThunkConfig<string>>(
    'login/registerByEmail',
    async (authData, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/register', authData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('пользователь уже существует');
        }
    },
);
