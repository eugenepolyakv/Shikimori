import React, { useState } from 'react';
import { useCreateRecipeMutation } from '../../../store/api/recipe.api';

const baseValues = { id: '', strMeal: '', strMealThumb: '' };

const AddForm = () => {
    const [createRecipe] = useCreateRecipeMutation();
    const [recipe, setRecipe] = useState(baseValues);
    const handleSubmit = (e) => {
        e.preventDefault();
        createRecipe(recipe).then(() => setRecipe(baseValues));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="ID"
                    value={recipe.id}
                    onChange={(e) =>
                        setRecipe({ ...recipe, id: e.target.value })
                    }
                ></input>
                <input
                    type="text"
                    placeholder="Name"
                    value={recipe.strMeal}
                    onChange={(e) =>
                        setRecipe({ ...recipe, strMeal: e.target.value })
                    }
                ></input>
                <input
                    type="text"
                    placeholder="Image"
                    value={recipe.strMealThumb}
                    onChange={(e) =>
                        setRecipe({ ...recipe, strMealThumb: e.target.value })
                    }
                ></input>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default AddForm;
