import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import { User, UserSchema } from './model/types/user';

export {
    userReducer,
    userActions,
    getUserAuthData,
    getUserInited,
    User,
    UserSchema,
};
