import { User } from '@/common/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_APP_BASE_URL}/students`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<{ results: User[] }, void>({
            query: () => '/',
        }),
    }),
});

export const { useGetUsersQuery } = userApi;
export { userApi };
