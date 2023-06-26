import { createSlice } from '@reduxjs/toolkit';

const initialState = { recipes: [] };

export const favorite = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        toggleFavorite: (state, { payload: recipe }) => {
            const isExist = state.recipes.some((r) => r.id === recipe.id);
            if (isExist) {
                state.recipes = state.recipes.filter((r) => r.id !== recipe.id);
            } else state.recipes.push(recipe);
        },
    },
});

export const { actions, reducer } = favorite;
