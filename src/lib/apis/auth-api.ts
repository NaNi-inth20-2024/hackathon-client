import {
    LoginPayload,
    RegisterPayload,
    User,
    UserWithToken,
} from '@/common/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_APP_BASE_URL}/auth`,
    }),
    endpoints: (builder) => ({
        login: builder.mutation<UserWithToken, LoginPayload>({
            query: (body) => ({
                url: '/token',
                method: 'POST',
                body,
            }),
        }),
        register: builder.mutation<UserWithToken, RegisterPayload>({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body: {
                    ...body,
                    'first_name': body.first_name,
                    'last_name': body.last_name,
                },
            }),
        }),
        getUser: builder.query<User, void>({
            query: () => ({
                url: '/user',
                method: 'GET',
                headers: new Headers({
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                }),
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserQuery } =
    authApi;
export { authApi };
