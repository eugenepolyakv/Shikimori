import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rootApi } from './api/rootApi';
import { authApi } from './api/authApi';
const rootReducer = combineReducers({
    [rootApi.reducerPath]: rootApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(rootApi.middleware)
            .concat(authApi.middleware);
    },
});
