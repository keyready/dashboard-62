export interface User {
    id: string;
    email: string;
    avatar?: string;
    role?: string;
}

export interface UserSchema {
    authData?: User;

    _inited?: boolean;
}
