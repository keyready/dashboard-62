import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerByEmail } from '../services/registerByEmail/registerByEmail';
import { LoginSchema } from '../types/loginSchema';
import { loginByEmail } from '../services/loginByEmail/loginByEmail';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action:PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
    extraReducers: ((builder) => {
        builder
            .addCase(loginByEmail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByEmail.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(registerByEmail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registerByEmail.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(registerByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }),
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
