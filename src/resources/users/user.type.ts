export interface TUser {
    firstName: string;
    lastName: string;
    login: string;
    password: string;
    phoneNumber: string;
}

export interface TUserModel extends TUser {
    id: string;
}

export interface TUserResponse extends Omit<TUser, 'password'> {
    id: string;
}