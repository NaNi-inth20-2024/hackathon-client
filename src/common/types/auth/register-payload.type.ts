type RegisterPayload = {
    role: 'teacher' | 'student';
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export { type RegisterPayload };
