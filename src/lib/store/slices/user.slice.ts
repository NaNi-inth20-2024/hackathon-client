import { createSlice } from '@reduxjs/toolkit/react';
import { User } from '@/common/types';

type State = {
    user: User | null;
    token: string | null;
};

const initialState: State = {
    user: null,
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setUser, setToken } = userSlice.actions;
export { userSlice };
