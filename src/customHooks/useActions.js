import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store/favorites/favorite.slice.';
import * as userActions from '../store/user/user.actions';
const allActions = { ...actions, ...userActions };

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
