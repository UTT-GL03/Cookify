import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeListPage from './components/RecipeListPage';
import RecipeDetail from './components/RecipeDetail';
import './App.css';
import logo from './assets/react.svg';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5984/cookify_1/_all_docs?include_docs=true');
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }
        const result = await response.json();
  
        // Extraire les documents de la réponse
        const recipes = result.rows.map((row) => row.doc);
  
        // Mettre à jour l'état avec les recettes
        setData(recipes);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to="/">
            <img src={logo} alt="Cookify Logo" className="app-logo" />
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes/:section" element={<RecipeListPage data={data} />} />
          <Route path="/recipe/:_id" element={<RecipeDetail data={data} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
