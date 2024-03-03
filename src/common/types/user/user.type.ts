import { ROLE } from '@/common/enums';

type User = {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    role: typeof ROLE;
};

export { type User };
