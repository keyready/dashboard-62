import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { UIReducer } from 'features/UI';
import { loginReducer } from 'features/AuthByEmail';
import { rtkApi } from 'shared/api/rtkApi';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export function CreateReduxStore(
    initialState?: StateSchema,
    lazyReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...lazyReducers,
        user: userReducer,
        ui: UIReducer,
        loginForm: loginReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        // @ts-ignore
        reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
        devTools: IS_DEV,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof CreateReduxStore>['dispatch'];
