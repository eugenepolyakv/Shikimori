import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:8000';
// const API_URL = 'https://api.jikan.moe/v4/';
export const authApi = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getUserToken: builder.mutation({
            query: (body) => ({
                url: 'access_token',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetUserTokenMutation } = authApi;
