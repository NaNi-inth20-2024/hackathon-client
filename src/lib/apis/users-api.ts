import { UserStatistics } from '@/common/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_APP_BASE_URL}/users/`,
    }),
    endpoints: (builder) => ({
        getUserStatistics: builder.query<UserStatistics, void>({
            query: () => ({
                url: `/statistic`,
                method: 'GET',
                headers: new Headers({
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                }),
            }),
        }),
    }),
});

export const { useGetUserStatisticsQuery } = usersApi;
export { usersApi };
