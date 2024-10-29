// components/RecipeListPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './../RecipeListPage.css';

const RecipeListPage = () => {
    const { section } = useParams();
    const recipes = [
        { title: 'Recette 1', description: 'Description de la recette 1' },
        { title: 'Recette 2', description: 'Description de la recette 2' },
        { title: 'Recette 3', description: 'Description de la recette 3' },
        { title: 'Recette 4', description: 'Description de la recette 4' },
        { title: 'Recette 5', description: 'Description de la recette 5' },
        { title: 'Recette 6', description: 'Description de la recette 6' },
    ];

    return (
        <div className="recipe-list-page">
            <h1>Recettes pour {section}</h1>
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe">
                        <h2>{recipe.title}</h2>
                        <p>{recipe.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeListPage;
