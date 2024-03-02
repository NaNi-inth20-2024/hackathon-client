import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/user.slice';
import { authApi } from '../apis';
import { subjectApi } from '../apis/subject-api';

const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [subjectApi.reducerPath]: subjectApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            subjectApi.middleware,
        ),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
