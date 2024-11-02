// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeListPage from './components/RecipeListPage';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:section" element={<RecipeListPage />} />
        <Route path="/recipes/:section/:title" element={<RecipeDetail />} /> {/* Route avec section et title */}
      </Routes>
    </Router>
  );
};

export default App;