// App.js
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="sections-container">
        <Section title="Pour le sport" description="Recettes adaptées pour les sportifs, riches en protéines et en énergie." />
        <Section title="Pour les végétariens" description="Recettes sans viande, riches en légumes et protéines végétales." />
        <Section title="Pour le plaisir" description="Recettes gourmandes pour se faire plaisir, tout en restant équilibré." />
      </div>
    </div>
  );
};

export default App;
