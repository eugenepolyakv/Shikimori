import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rootApi } from './api/rootApi';
const rootReducer = combineReducers({ [rootApi.reducerPath]: rootApi.reducer });

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(rootApi.middleware);
    },
});
