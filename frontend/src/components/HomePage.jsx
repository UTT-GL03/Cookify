import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './../HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleSectionClick = (section) => {
        navigate(`/recipes/${section}`);
    };

    return (
        <div className="home-page">
            <Header />
            <div className="sections-container">
                <div className="section" onClick={() => handleSectionClick('sport')}>
                    <h2>Pour le sport</h2>
                    <p>Recettes adaptées pour les sportifs, riches en protéines et en énergie.</p>
                </div>
                <div className="section" onClick={() => handleSectionClick('vegetarien')}>
                    <h2>Pour les végétariens</h2>
                    <p>Recettes sans viande, riches en légumes et protéines végétales.</p>
                </div>
                <div className="section" onClick={() => handleSectionClick('plaisir')}>
                    <h2>Pour le plaisir</h2>
                    <p>Recettes gourmandes pour se faire plaisir, tout en restant équilibré.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;