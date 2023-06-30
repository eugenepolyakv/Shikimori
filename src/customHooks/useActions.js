import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../store/favorites/favorite.slice.';
// import * as recipeActions from '../store/favorites/favorite.slice.';
// import * as userActions from '../store/user/user.actions';
import { getUsersById } from '../store/user/user.actions';
import { getRecipes } from '../store/favorites/favorite.actions';
const allActions = { ...actions, getUsersById, getRecipes };

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
