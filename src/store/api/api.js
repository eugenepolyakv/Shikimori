import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const APU_URL = 'http://localhost:4200/';

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({ baseUrl: APU_URL }),
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => 'meals/',
            providesTags: () => ['Recipe'],
        }),
    }),
});

export const { useGetRecipesQuery } = api;
