import { User } from '../user/user.type';

type Subject = {
    id: number;
    semester: number;
    name: string;
    year: number;
    teachers: User[];
};

export { type Subject };
