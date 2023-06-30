import { createSlice } from '@reduxjs/toolkit';
import { getRecipes } from './favorite.actions';
const initialState = { recipes: [] };

export const favorite = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        toggleFavorite: (state, { payload: recipe }) => {
            const isExist = state.recipes.some(
                (r) => r.idMeal === recipe.idMeal
            );
            if (isExist) {
                state.recipes = state.recipes.filter(
                    (r) => r.idMeal !== recipe.idMeal
                );
            } else state.recipes.push(recipe);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRecipes.pending, () => {})
            .addCase(getRecipes.fulfilled, (state, action) => {
                state.recipes = action.payload;
            })
            .addCase(getRecipes.rejected, () => {});
    },
});

export const { actions, reducer } = favorite;
