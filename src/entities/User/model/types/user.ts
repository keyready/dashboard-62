export interface User {
    id: string;
    email: string;
    role?: string;
}

export interface UserSchema {
    authData?: User;

    _inited?: boolean;
}
