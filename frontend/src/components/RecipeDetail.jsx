import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../RecipeDetail.css';

const RecipeDetail = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5984/cookify_1/_find', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            selector: {
              _id: _id,
            },
          }),
        });

        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }

        const result = await response.json();

        if (result.docs.length > 0) {
          setData(result.docs[0]);
        } else {
          setData(null);
        }

        setLoading(false);
      } catch (err) {
        console.error('Erreur pendant le fetch:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [_id]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  if (!data) {
    return <p>Recette non trouvée</p>;
  }

  return (
    <div className="recipe-detail">
      <h1 className="recipe-title">{data.title}</h1>
      <div className="recipe-info">
        <p>Temps de préparation : {data.prepTime}</p>
        <p>Difficulté : {data.difficulty}</p>
      </div>
      <div className="recipe-ingredients">
        <h2>Ingrédients</h2>
        <ul>
          {data.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-steps">
        <h2>Étapes de Préparation</h2>
        <ol>
          {data.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
