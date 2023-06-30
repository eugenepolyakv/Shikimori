import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as testReducer } from './favorites/favorite.slice.';
import { userSlice } from './user/user.slice';
import { api } from './api/api';
import { createLogger } from 'redux-logger';

const logger = createLogger({
    collapsed: true,
});

const rootReducer = combineReducers({
    test: testReducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer,
});

// export const setupStore = () => {
//     return configureStore({
//         reducer: rootReducer,
//     });
// };

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware).concat(logger),
});
