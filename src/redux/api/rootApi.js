import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://api.jikan.moe/v4/';

export const rootApi = createApi({
    reducerPath: 'rootAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        // credentials: 'same-origin',
        // prepareHeaders: (headers) =>
        //     headers.set('Access-Control-Allow-Origin', '*'),
        prepareHeaders: (headers, { getState }) => {
            // headers.set('Origin', 'http://127.0.0.1:5173/');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getListOfAnime: builder.query({
            query: (page = 1) => `anime?page=${page}`,
        }),
    }),
});

export const { useGetListOfAnimeQuery } = rootApi;
