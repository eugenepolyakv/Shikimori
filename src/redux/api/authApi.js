import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { login, logOut } from '../slices/authSlice';
const API_URL = 'http://localhost:5000/api';
const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    credentials: 'include',
    // prepareHeaders: (headers, { getState }) => {
    //     const token = getState().authSlice.token;
    //     if (token) {
    //         headers.set('authorization', `Bearer ${token}`);
    //     }
    //     return headers;
    // },
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    // console.log('API ERRORS');
    // console.log(result);
    // console.log(result);
    return result;

    // if (result?.error?.originalStatus === 403) {
    //     console.log('sending refresh token');
    //     const refreshResult = await baseQuery('/refresh', api, extraOptions);
    //     console.log(refreshResult);
    //     if (refreshResult?.data) {
    //         const user = api.getState().auth.user;
    //         api.dispatch(setCredentials({ ...refreshResult.data, user }));
    //         result = await baseQuery(args, api, extraOptions);
    //     } else {
    //         api.dispatch(logOut());
    //     }
    // }
};

export const authApi = createApi({
    reducerPath: 'authAPI',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getUserToken: builder.mutation({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetUserTokenMutation } = authApi;
