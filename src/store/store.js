import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as testReducer } from './favorites/favorite.slice.';
import { userSlice } from './user/user.slice';
const rootReducer = combineReducers({
    test: testReducer,
    user: userSlice.reducer,
});

// export const setupStore = () => {
//     return configureStore({
//         reducer: rootReducer,
//     });
// };

export const store = configureStore({
    reducer: rootReducer,
});
