import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByEmail';
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { UISchema } from 'features/UI';
import { CandidateSchema } from 'entities/Candidate';
import { CandidatesPageSchema } from 'pages/CandidatesPage';
import { UploadPageSchema } from 'pages/UploadFilesPage';
import { rtkApi } from 'shared/api/rtkApi';
import { FolderSchema } from 'entities/Folder';
import { AllocationPageSchema } from 'pages/AllocationPage';

export interface StateSchema {
    user: UserSchema;
    ui: UISchema;
    loginForm: LoginSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // asynchronous reducers
    candidate?: CandidateSchema;
    candidates?: CandidatesPageSchema;
    filesUpload?: UploadPageSchema;
    folder?: FolderSchema;
    allocationPage?: AllocationPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
export interface reducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: reducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}

export interface ThunkError {
    message: string;
}
