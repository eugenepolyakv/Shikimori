import { createSlice } from '@reduxjs/toolkit';
// import { notificationThunk } from '../thunks/notificationThunk';
const notificationSlice = createSlice({
    name: 'notificationSlice',
    initialState: { notifications: {} },
    reducers: {
        slideInNotification: (state, { payload }) => {
            state.notifications[payload.newID] = {
                message: payload.message,
                type: payload.type,
                status: 'SLIDE_IN',
            };
        },
        fixNotification: (state, { payload }) => {
            if (state.notifications[payload.newID].status == 'SLIDE_IN') {
                state.notifications[payload.newID].status = 'SHOWN';
            }
        },
        slideOutNotification: (state, { payload }) => {
            if (state.notifications[payload.newID].status == 'SHOWN') {
                state.notifications[payload.newID].status = 'SLIDE_OUT';
            }
        },
        dissapearNotification: (state, { payload }) => {
            if (state.notifications[payload.newID].status == 'SLIDE_OUT') {
                state.notifications[payload.newID].status = 'DISSAPEARS';
            }
        },
        removeNotification: (state, { payload }) => {
            if (state.notifications[payload.newID].status == 'DISSAPEARS') {
                const arr = [];
                for (let el in state.notifications) {
                    arr.push(state.notifications[el]);
                }
                const arr2 = arr.filter((el) => el.status != 'REMOVED');
                if (arr2.length === 1) {
                    state.notifications = {};
                } else {
                    state.notifications[payload.newID].status = 'REMOVED';
                }
            }
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
