import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authSlice',
    initialState: { username: null },
    reducers: {
        login: (state, action) => {
            const { username } = action.payload;
            state.username = username;
            // state.token = accessToken;
        },
        logOut: (state, action) => {
            state.username = null;
            // state.token = null;
        },
    },
});

export const { login, logOut } = authSlice.actions;

export default authSlice;
