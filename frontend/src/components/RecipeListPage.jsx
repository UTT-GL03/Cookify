// components/RecipeListPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import sampleData from '../assets/sample_data.json';
import '../RecipeListPage.css';

const RecipeListPage = () => {
    const { section } = useParams();
    const recipes = sampleData.recipes.filter(recipe => recipe.section === section);

    return (
        <div className="recipe-list-page">
            <h1>Recettes pour la section "{section}"</h1>
            <div className="recipes-container">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <div key={recipe.title} className="recipe-card">
                            <Link to={`/recipes/${section}/${encodeURIComponent(recipe.title)}`} className="recipe-link">
                                <h3>{recipe.title}</h3>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Aucune recette trouvée pour cette section.</p>
                )}
            </div>
        </div>
    );
};

export default RecipeListPage;
