import { User } from './user.type';

type UserWithToken = {
    user: User;
    access: string;
};

export { type UserWithToken };
