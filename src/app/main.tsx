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
                            { path: '/login', element: <AuthPage /> },
                            { path: '/register', element: <AuthPage /> },
                            { path: '/students', element: <StudentsPage /> },
                            {
                                path: '/subjects',
                                element: <SubjectPage />,
                                children: [
                                    { path: '/subjects/:id', element: <></> },
                                    {
                                        path: '/subjects/:id/tasks',
                                        element: <TaskSection />,
                                    },
                                    {
                                        path: '/subjects/:id/tasks/:id',
                                        element: <TaskDetails />,
                                    },
                                    {
                                        path: '/subjects/:id/grades',
                                        element: <></>,
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
