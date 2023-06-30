import axios from 'axios';

const APItemplate = axios.create({ baseURL: 'http://localhost:4200/' });

export const recipeAPI = {
    getRecipes: () =>
        APItemplate.get('meals/').then((response) => response.data),
};
