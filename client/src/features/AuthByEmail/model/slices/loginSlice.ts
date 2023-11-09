import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThunkError } from 'app/providers/StoreProvider/config/StateSchema';
import { registerByEmail } from '../services/registerByEmail/registerByEmail';
import { LoginSchema } from '../types/loginSchema';
import { loginByEmail } from '../services/loginByEmail/loginByEmail';

const initialState: LoginSchema = {
    mail: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.error = '';
            state.mail = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.error = '';
            state.password = action.payload;
        },
        setError: (state, action: PayloadAction<ThunkError>) => {
            state.error = action.payload.message;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByEmail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByEmail.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(loginByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.password = '';
                state.error = action.payload?.message;
            })

            .addCase(registerByEmail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registerByEmail.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(registerByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.password = '';
                state.error = action.payload?.message;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
