import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/user.slice';
import { authApi } from '../apis';
import { usersApi } from '../apis/users-api';

const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, usersApi.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, type RootState, type AppDispatch };
