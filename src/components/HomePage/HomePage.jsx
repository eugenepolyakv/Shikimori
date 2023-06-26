import React from 'react';
import RecipeItem from '../testComponents/RecipeItem';
import { useSelector } from 'react-redux';
import { useActions } from '../../customHooks/useActions';
import { useFavorites } from '../../customHooks/useFavorites';
import { userSlice } from '../../store/user/user.slice';
import User from '../user/User';
const HomePage = () => {
    console.log(userSlice);
    const recipes = useFavorites();
    const { toggleFavorite } = useActions();
    return (
        <div>
            <User />
            Content
            <RecipeItem
                recipe={{ id: 1, name: 'Лазанья' }}
                recipes={recipes}
                toggleFavorite={toggleFavorite}
            />
            <RecipeItem
                recipe={{ id: 2, name: 'Паста' }}
                recipes={recipes}
                toggleFavorite={toggleFavorite}
            />
        </div>
    );
};

export default HomePage;
