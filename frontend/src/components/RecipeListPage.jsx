import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../RecipeListPage.css';

const RecipeListPage = () => {
    const [recipes, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { section } = useParams();
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Requête vers l'API CouchDB avec une section dynamique
            const response = await fetch('http://localhost:5984/cookify_1/_find', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                selector: {
                  section: section // Utilisation de la section passée en paramètre
                }
              }),
            });
    
            if (!response.ok) {
              throw new Error('Erreur lors du chargement des données');
            }
    
            const result = await response.json();
            const recipes = result.docs; // Les documents filtrés par section
    
            setData(recipes);
            setLoading(false);
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        };
    
        fetchData();
      }, [section]);

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
