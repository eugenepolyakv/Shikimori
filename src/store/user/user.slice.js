import { createSlice } from '@reduxjs/toolkit';
import { getUsersById } from './user.actions';
// import { actions } from '../favorites/favorite.slice.';

export const userSlice = createSlice({
    name: 'users',
    initialState: { isLoading: false, error: null, user: {} },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsersById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUsersById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(getUsersById.rejected, (state) => {
                state.isLoading = false;
                state.error = action.payload.error;
                state.user = {};
            });
    },
});
