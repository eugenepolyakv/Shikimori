import { createSlice } from '@reduxjs/toolkit';
// import { notificationThunk } from '../thunks/notificationThunk';
const notificationSlice = createSlice({
    name: 'notificationSlice',
    initialState: { notifications: {} },
    reducers: {
        addNotification: (state, { payload }) => {
            state.notifications[payload.newID] = {
                message: payload.message,
                type: payload.type,
                status: 'SHOWN',
            };
            // state.notifications.push({
            // message: payload.message,
            // type: payload.type,
            // status: 'SHOWN',
            // });
        },
        prepareForRemove: (state, { payload }) => {
            state.notifications[payload.newID].status = 'DISSAPEARS';
        },
        removeNotification: (state, { payload }) => {
            delete state.notifications[payload.newID];
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(notificationThunk.pending, (state, action) => {
    //         console.log(action);
    //         state.notifications.push({
    //             message: action.meta.arg.message,
    //             type: action.meta.arg.type,
    //         });
    //     });
    //     builder.addCase(notificationThunk.fulfilled, (state, action) => {
    //         state.notifications.shift();
    //     });
    // },
});
export const { actions } = notificationSlice;
export default notificationSlice;
