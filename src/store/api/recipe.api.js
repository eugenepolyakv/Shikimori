import { api } from './api';

export const recipeAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        createRecipe: builder.mutation({
            query: (recipe) => ({
                body: recipe,
                url: 'meals/',
                method: 'POST',
            }),
            invalidatesTags: () => ['Recipe'],
        }),
    }),
});

export const { useCreateRecipeMutation } = recipeAPI;
