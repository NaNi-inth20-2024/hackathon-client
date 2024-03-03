import { Subject, Task, User } from '@/common/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const subjectApi = createApi({
    reducerPath: 'subjectApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_APP_BASE_URL}/subjects`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
    }),
    endpoints: (builder) => ({
        getSubjects: builder.query<Subject[], void>({
            query: () => '/',
        }),
        getSubject: builder.query<Subject, number>({
            query: (id) => `/${id}`,
        }),
        getSubjectTasks: builder.query<Task[], number>({
            query: (id) => `/${id}/tasks`,
        }),
        getSubjectUsers: builder.query<User[], number>({
            query: (id) => `/${id}/users`,
        }),
        addTask: builder.mutation<
            Task,
            { subjectId: number; task: Omit<Task, 'id' | 'is_finished'> }
        >({
            query: ({ subjectId, task }) => ({
                url: `${subjectId}/addtask/`,
                method: 'POST',
                body: task,
            }),
        }),
        createSubject: builder.mutation<
            Subject,
            Omit<Subject, 'id' | 'teachers'>
        >({
            query: (subject) => ({
                url: '/',
                method: 'POST',
                body: subject,
            }),
        }),
        addUserToSubject: builder.mutation<
            User,
            { subjectId: number; userId: number }
        >({
            query: ({ subjectId, userId }) => ({
                url: `${subjectId}/users/${userId}/`,
                method: 'PUT',
            }),
        }),
    }),
});

export const {
    useGetSubjectsQuery,
    useGetSubjectQuery,
    useGetSubjectTasksQuery,
    useAddTaskMutation,
    useGetSubjectUsersQuery,
    useCreateSubjectMutation,
    useAddUserToSubjectMutation,
} = subjectApi;
export { subjectApi };
