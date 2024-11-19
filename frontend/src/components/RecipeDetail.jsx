import React from 'react';
import { useParams } from 'react-router-dom';
import '../RecipeDetail.css';

const RecipeDetail = ({ data }) => {
    const { _id } = useParams();
    const recipe = data.find(recipe => recipe._id === _id);

    if (!recipe) {
        return <p>Recette non trouvée</p>;
    }

    return (
        <div className="recipe-detail">
            <h1 className="recipe-title">{recipe.title}</h1>
            <div className="recipe-info">
                <p>Temps de préparation : {recipe.prepTime}</p>
                <p>Difficulté : {recipe.difficulty}</p>
            </div>
            <div className="recipe-ingredients">
                <h2>Ingrédients</h2>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="recipe-steps">
                <h2>Étapes de Préparation</h2>
                <ol>
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default RecipeDetail;
