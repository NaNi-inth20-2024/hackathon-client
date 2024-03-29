import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from '@/lib/store/store.ts';
import { RouterProvider } from '@/lib/router/router-provider.tsx';

import '@/styles/index.scss';
import {
    AuthPage,
    MainPage,
    StudentsPage,
    SubjectPage,
} from '@/pages/index.ts';
import { TaskSection } from '@/pages/subject-page/components/task-section/task-section.tsx';
import { TaskDetails } from '@/pages/subject-page/components/task-details/task-details.tsx';
import { SubjectsPage } from '@/pages/subjects-page/subjects-page.tsx';
import { StudentsSection } from '@/pages/subject-page/components/students-section/students-section.tsx';
import { ProfilePage } from '@/pages/profile-page/profile-page.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider
                routes={[
                    {
                        path: '/',
                        element: <App />,
                        children: [
                            { path: '/', element: <MainPage /> },
                            { path: '/profile', element: <ProfilePage /> },
                            { path: '/login', element: <AuthPage /> },
                            { path: '/register', element: <AuthPage /> },
                            { path: '/students', element: <StudentsPage /> },
                            { path: '/subjects', element: <SubjectsPage /> },
                            {
                                path: '/subjects/:id',
                                element: <SubjectPage />,
                                children: [
                                    {
                                        path: '/subjects/:id/tasks',
                                        element: <TaskSection />,
                                    },
                                    {
                                        path: '/subjects/:id/tasks/:taskId',
                                        element: <TaskDetails />,
                                    },
                                    {
                                        path: '/subjects/:id/students',
                                        element: <StudentsSection />,
                                    },
                                ],
                            },
                        ],
                    },
                ]}
            />
        </Provider>
    </React.StrictMode>,
);
