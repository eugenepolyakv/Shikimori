import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://api.jikan.moe/v4/';

export const rootApi = createApi({
    reducerPath: 'rootAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, { getState }) => {
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getListOfAnime: builder.query({
            query: (page = 1) => `anime?page=${page}`,
        }),
        getAnimeById: builder.query({ query: (id) => `anime/${id}` }),
        getProducersById: builder.query({ query: (id) => `producers/${id}` }),
        getCharactersByAnimeId: builder.query({
            query: (id) => `anime/${id}/characters`,
        }),
    }),
});

export const {
    useGetListOfAnimeQuery,
    useGetAnimeByIdQuery,
    useGetProducersByIdQuery,
    useGetCharactersByAnimeIdQuery,
} = rootApi;
