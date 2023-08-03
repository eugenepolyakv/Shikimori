import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authSlice',
    initialState: { username: null, isAuthorized: null },
    reducers: {
        login: (state, action) => {
            const { username, regDate } = action.payload;
            state.username = username;
            state.isAuthorized = true;
            state.registrationDate = regDate;
            // state.token = accessToken;
        },
        logOut: (state, action) => {
            state.username = null;
            state.isAuthorized = false;
            state.registrationDate = null;
            // state.token = null;
        },
    },
});

export const { login, logOut } = authSlice.actions;

export default authSlice;
