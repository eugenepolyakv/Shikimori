import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/favorites/favorite.slice.';
// import { useActions } from '../../customHooks/useActions';
const RecipeItem = ({ recipe, recipes, toggleFavorite }) => {
    // const state = useSelector((state) => state.test);
    // const { toggleFavorite } = useActions();
    // console.log(recipes);
    return (
        <div>
            <h2>{recipe.strMeal}</h2>
            <button onClick={() => toggleFavorite(recipe)}>
                {recipes.some((el) => el.idMeal === recipe.idMeal)
                    ? 'Remove from favorities'
                    : 'Add to favorities'}
            </button>
        </div>
    );
};

export default RecipeItem;