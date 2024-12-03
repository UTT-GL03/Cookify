import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../RecipeListPage.css';

const RecipeListPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [offset, setOffset] = useState(0); // Pour suivre l'offset (pagination)
    const { section } = useParams();
    const limit = 25; // Nombre de recettes par page

    const fetchData = async (newOffset) => {
        try {
            setLoading(true);
            // Requête vers l'API CouchDB avec un offset dynamique
            const response = await fetch('http://localhost:5984/cookify_1/_find', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    selector: {
                        section: section,
                    },
                    limit: limit,
                    skip: newOffset, // Utilisation de l'offset pour paginer
                }),
            });

            if (!response.ok) {
                throw new Error('Erreur lors du chargement des données');
            }

            const result = await response.json();
            const newRecipes = result.docs;

            setRecipes((prevRecipes) => [...prevRecipes, ...newRecipes]); // Ajouter les nouvelles recettes
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(offset); // Charger les premières recettes lors du montage
    }, [section, offset]);

    const handleLoadMore = () => {
        setOffset((prevOffset) => prevOffset + limit); // Augmenter l'offset pour la pagination
    };

    if (loading && recipes.length === 0) {
        return <p>Chargement...</p>;
    }

    if (error) {
        return <p>Erreur : {error}</p>;
    }

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
            {loading && <p>Chargement...</p>}
            {!loading && (
                <button onClick={handleLoadMore} className="load-more-button">
                    Charger plus de recettes
                </button>
            )}
        </div>
    );
};

export default RecipeListPage;
