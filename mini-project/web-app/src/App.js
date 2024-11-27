import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import FeaturesPage from './pages/FeaturePage';
import LocationTracker from './pages/LocationTracker';
import Paint from './pages/Paint';
import Todo from './pages/Todo';
import TicTacToe from './pages/TicTacToe';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/location" element={<LocationTracker />} />
        <Route path="/paint" element={<Paint />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
};

export default App;
