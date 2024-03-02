import { Subject, Task } from '@/common/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const subjectApi = createApi({
    reducerPath: 'subjectApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/v1/subjects',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
    }),
    endpoints: (builder) => ({
        getSubjects: builder.query<Subject[], void>({
            query: () => '',
        }),
        getSubject: builder.query<Subject, number>({
            query: (id) => `${id}`,
        }),
        getSubjectTasks: builder.query<Task[], number>({
            query: (id) => `${id}/tasks`,
        }),
        addTask: builder.mutation<Task, { subjectId: number; task: Task }>({
            query: ({ subjectId, task }) => ({
                url: `${subjectId}/addtask`,
                method: 'POST',
                body: task,
            }),
        }),
    }),
});

export const {
    useGetSubjectsQuery,
    useGetSubjectQuery,
    useGetSubjectTasksQuery,
    useAddTaskMutation,
} = subjectApi;
export { subjectApi };
