import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from '@/lib/store/store.ts';
import { RouterProvider } from '@/lib/router/router-provider.tsx';

import '@/styles/index.scss';
import { MainPage } from '@/pages/index.ts';
import ProfilePage from '@/pages/profile-page/profile-page.tsx';

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
                        ],
                    },
                ]}
            />
        </Provider>
    </React.StrictMode>,
);
