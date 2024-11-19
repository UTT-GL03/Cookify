import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../RecipeListPage.css';

const RecipeListPage = ({ data }) => {
    const { section } = useParams();
    const recipes = data.filter(recipe => recipe.section.toLowerCase() === section.toLowerCase());

    return (
        <div className="recipe-list-page">
            <h1>Recettes pour la section "{section}"</h1>
            <div className="recipes-container">
                {recipes.map((recipe) => (
                    <div key={recipe._id} className="recipe-card">
                        <Link to={`/recipe/${recipe._id}`} className="recipe-link">
                            <h3>{recipe.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeListPage;
