import { ICourse } from './ICourse';

export interface IUser {
    _id: string;
    username: string;
    courses?: ICourse[];
    role?: string;
    password?: string;
    hashedPassword?: string;
}

export interface IUserEntity {
    token: string;
    userId: string;
    role: string;
}