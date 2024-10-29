import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeListPage from './components/RecipeListPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:section" element={<RecipeListPage />} />
      </Routes>
    </Router>
  );
};

export default App;