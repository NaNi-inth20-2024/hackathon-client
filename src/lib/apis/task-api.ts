import { Task } from '@/common/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/v1/tasks',
    }),
    endpoints: (builder) => ({
        getTask: builder.query<Task, number>({
            query: (id) => `/${id}`,
        }),
    }),
});

export const { useGetTaskQuery } = taskApi;
export { taskApi };
