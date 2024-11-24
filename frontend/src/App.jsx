import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeListPage from './components/RecipeListPage';
import RecipeDetail from './components/RecipeDetail';
import './App.css';
import logo from './assets/react.svg';

const App = () => {
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
          <Route path="/recipes/:section" element={<RecipeListPage/>} />
          <Route path="/recipe/:_id" element={<RecipeDetail/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
