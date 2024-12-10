import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../RecipeListPage.css';

const RecipeListPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [offset, setOffset] = useState(0);
    const { section } = useParams();
    const limit = 25;

    const fetchData = async (newOffset) => {
        try {
            setLoading(true);
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
                    skip: newOffset,
                }),
            });

            if (!response.ok) {
                throw new Error('Erreur lors du chargement des données');
            }

            const result = await response.json();
            const newRecipes = result.docs;

            setRecipes((prevRecipes) => [...prevRecipes, ...newRecipes]);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(offset);
    }, [section, offset]);

    useEffect(() => {
        // Filtrer les recettes en fonction du terme de recherche
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filtered = recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(lowercasedSearchTerm)
        );
        setFilteredRecipes(filtered);
    }, [searchTerm, recipes]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleLoadMore = () => {
        setOffset((prevOffset) => prevOffset + limit);
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
            <input
                type="text"
                placeholder="Rechercher une recette..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            <div className="recipes-container">
                {filteredRecipes.map((recipe) => (
                    <Link to={`/recipe/${recipe._id}`} className="recipe-card" key={recipe._id}>
                        <h3 className="recipe-link">{recipe.title}</h3>
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
