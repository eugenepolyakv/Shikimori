import { createAsyncThunk } from '@reduxjs/toolkit';
import { actions } from '../slices/notificationSlice';

function genRandonString(length, arr) {
    var chars =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    var charLength = chars.length;
    while (true) {
        var result = '';
        for (var i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        if (result in arr) {
            continue;
        } else {
            return result;
        }
    }
}

export const notificationThunk = createAsyncThunk(
    'notificationSlice/notificationThunk',
    async ({ message, type }, thunkAPI) => {
        try {
            const newID = genRandonString(
                12,
                thunkAPI.getState().notificationSlice.notifications
            );
            thunkAPI.dispatch(
                actions.slideInNotification({ newID, message, type })
            );
            await new Promise((r) => setTimeout(() => r(), 1000));
            thunkAPI.dispatch(actions.fixNotification({ newID }));
            await new Promise((r) => setTimeout(() => r(), 5000));
            thunkAPI.dispatch(actions.slideOutNotification({ newID }));
            await new Promise((r) => setTimeout(() => r(), 1000));
            thunkAPI.dispatch(actions.dissapearNotification({ newID }));
            await new Promise((r) => setTimeout(() => r(), 1000));
            return thunkAPI.dispatch(actions.removeNotification({ newID }));
        } catch (e) {
            console.log('ERROR THUNK');
            console.log(e);
        }
    }
);

export const notificationThunkManualClose = createAsyncThunk(
    'notificationSlice/notificationThunkManualClose',
    async ({ newID }, thunkAPI) => {
        try {
            thunkAPI.dispatch(actions.slideOutNotification({ newID }));
            await new Promise((r) => setTimeout(() => r(), 1000));
            thunkAPI.dispatch(actions.dissapearNotification({ newID }));
            await new Promise((r) => setTimeout(() => r(), 1000));
            return thunkAPI.dispatch(actions.removeNotification({ newID }));
        } catch (e) {
            console.log(e);
        }
    }
);
