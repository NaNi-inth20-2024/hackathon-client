import { LoginPayload, RegisterPayload, User } from '@/common/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
    endpoints: (builder) => ({
        login: builder.mutation<User, LoginPayload>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
        }),
        register: builder.mutation<User, RegisterPayload>({
            query: (body) => ({
                url: '/auth/register',
                method: 'POST',
                body,
                headers: new Headers({
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                }),
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
export { authApi };
