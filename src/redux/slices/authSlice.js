import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authSlice',
    initialState: { username: null, isAuthorized: false },
    reducers: {
        login: (state, action) => {
            const { username } = action.payload;
            console.log(username);
            state.username = username;
            state.isAuthorized = true;
            // state.token = accessToken;
        },
        logOut: (state, action) => {
            state.username = null;
            state.isAuthorized = false;
            // state.token = null;
        },
    },
});

export const { login, logOut } = authSlice.actions;

export default authSlice;
