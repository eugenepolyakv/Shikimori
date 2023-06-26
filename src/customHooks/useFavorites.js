import { useSelector } from 'react-redux';

export const useFavorites = () => {
    const state = useSelector((state) => state.test);
    return state.recipes;
};
