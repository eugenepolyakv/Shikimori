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
    // console.log(result);
    // if (result?.error?.status === 403) {
    //     console.log('lala');
    // }
    if (result?.error?.status === 403) {
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        console.log(refreshResult);
        if (!refreshResult.error) {
            localStorage.setItem(
                'token',
                refreshResult.data.tokens.accessToken
            );
            result = await baseQuery(args, api, extraOptions);
        }
    }
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
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        getUserToken: builder.mutation({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body,
            }),
        }),
        registration: builder.mutation({
            query: (body) => ({
                url: 'registration',
                method: 'POST',
                body,
            }),
        }),
        getUsers: builder.query({
            query: () => 'users',
            providesTags: ['Auth'],
        }),
        getUserInfo: builder.mutation({
            query: () => ({ url: 'userInfo', method: 'POST' }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const res = await queryFulfilled;
                    console.log('startDispatchingLogin');
                    dispatch(login({ username: res.data.username }));
                    console.log('endDispatchingLogin');
                } catch (e) {
                    console.log('startDispatchingLogout');
                    dispatch(logOut());
                    console.log('endDispatchingLogout');
                    console.log(e);
                }

                // queryFulfilled
                //     .then((res) => {
                //         console.log('startDispatching');
                //         dispatch(login({ username: res.data.username }));
                //         console.log('endDispatching');
                //     })
                //     .catch((err) => console.log(err));
            },
        }),
        logout: builder.mutation({
            query: () => ({ url: 'logout', method: 'POST' }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                queryFulfilled
                    .then(() => {
                        dispatch(logOut());
                        localStorage.removeItem('token');
                    })
                    .catch((e) => console.log(e));
            },
            invalidatesTags: ['Auth'],
        }),
    }),
});

export const {
    useGetUserTokenMutation,
    useRegistrationMutation,
    useGetUsersQuery,
    useGetUserInfoMutation,
    useLogoutMutation,
} = authApi;
