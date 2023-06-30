import React from 'react';
import RecipeItem from '../testComponents/RecipeItem';
import { useSelector } from 'react-redux';
import { useActions } from '../../customHooks/useActions';
import { useFavorites } from '../../customHooks/useFavorites';
import { userSlice } from '../../store/user/user.slice';
import User from '../user/User';
import { useGetRecipesQuery } from '../../store/api/api';
import AddForm from './addForm/addForm';
const HomePage = () => {
    // console.log(userSlice);
    const recipes = useFavorites();
    const { toggleFavorite, getRecipes } = useActions();
    const { isLoading, data, refetch } = useGetRecipesQuery();
    console.log(recipes);
    return (
        <div>
            {/* <User /> */}
            Content
            <button onClick={() => refetch()}>CLICK ON ME TO REFETCH</button>
            <AddForm />
            {/* <button onClick={() => getRecipes()}>CLICK</button> */}
            {isLoading ? (
                <div>Loading...</div>
            ) : data ? (
                data.map((el) => (
                    <RecipeItem
                        key={el.id}
                        recipe={el}
                        recipes={recipes}
                        toggleFavorite={toggleFavorite}
                    />
                ))
            ) : (
                <div>There is no recipes in data base</div>
            )}
            {/* <RecipeItem
                recipe={{ id: 1, name: 'Лазанья' }}
                recipes={recipes}
                toggleFavorite={toggleFavorite}
            />
            <RecipeItem
                recipe={{ id: 2, name: 'Паста' }}
                recipes={recipes}
                toggleFavorite={toggleFavorite}
            /> */}
        </div>
    );
};

export default HomePage;
