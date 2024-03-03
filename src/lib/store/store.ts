import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/user.slice';
import { authApi } from '../apis';
import { subjectApi } from '../apis/subject-api';
import { taskApi } from '../apis/task-api';
import { userApi } from '../apis/user-api';

const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [subjectApi.reducerPath]: subjectApi.reducer,
        [taskApi.reducerPath]: taskApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            subjectApi.middleware,
            taskApi.middleware,
            userApi.middleware,
        ),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
