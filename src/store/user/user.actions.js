import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserById = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: 'Max' }), 1000);
    });
};

export const getUsersById = createAsyncThunk(
    'users/by-id',
    async (userId, thunkApi) => {
        try {
            const response = await fetchUserById(userId);
            return response;
        } catch (err) {
            thunkApi.rejectWithValue({});
        }
    }
);
