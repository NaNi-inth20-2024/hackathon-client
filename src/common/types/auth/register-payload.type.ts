type RegisterPayload = {
    role: 'TEACHER' | 'STUDENT';
    first_name: string;
    last_name: string;
    email: string;
    password: string;
};

export { type RegisterPayload };
