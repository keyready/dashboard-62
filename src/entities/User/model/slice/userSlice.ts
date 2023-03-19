import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_AUTHORIZATION_TOKEN } from 'shared/const';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            // при авторизации записать данные в стейт и в локал сторадж
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            // проверить, авторизован ли пользователь (после закрытия и открытия приложения)
            const user = localStorage.getItem(USER_AUTHORIZATION_TOKEN);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._inited = true;
        },
        logout: (state) => {
            // выход
            localStorage.removeItem(USER_AUTHORIZATION_TOKEN);
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
