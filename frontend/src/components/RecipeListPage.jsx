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
                    <Link to={`/recipe/${recipe._id}`} className="recipe-card" key={recipe._id}>
                        <h3 className='recipe-link'>{recipe.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecipeListPage;
