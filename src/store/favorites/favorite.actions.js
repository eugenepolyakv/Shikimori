import { createAsyncThunk } from '@reduxjs/toolkit';
import { recipeAPI } from '../../api/api';

export const getRecipes = createAsyncThunk('getRecipes', async (thunkApi) => {
    try {
        const response = await recipeAPI.getRecipes();
        return response;
    } catch (err) {
        return thunkApi.rejectWithValue({});
    }
});
