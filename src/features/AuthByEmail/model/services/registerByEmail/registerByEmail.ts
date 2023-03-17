import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_AUTHORIZATION_TOKEN } from 'shared/const';
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
            return rejectWithValue('login error');
        }
    },
);
