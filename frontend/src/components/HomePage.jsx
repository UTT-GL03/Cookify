// components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Bienvenue sur Cookify</h1>
            <p>Découvrez des recettes inspirantes et respectueuses de l'environnement pour tous les goûts !</p>
            <div className="sections">
                <Link to="/recipes/Végé" className="section">
                    <h2>Végé</h2>
                    <p>Des recettes végétariennes riches en saveurs.</p>
                </Link>
                <Link to="/recipes/Sport" className="section">
                    <h2>Sport</h2>
                    <p>Des repas énergétiques pour les sportifs.</p>
                </Link>
                <Link to="/recipes/Plaisir" className="section">
                    <h2>Plaisir</h2>
                    <p>Pour les gourmands à la recherche de plaisir culinaire.</p>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
