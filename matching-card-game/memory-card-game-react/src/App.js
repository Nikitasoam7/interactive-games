// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Win from './pages/Win';

function App() {
  return (
    <Router basename="/interactive-games/memory-card-game-react">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/win" element={<Win />} />
      </Routes>
    </Router>
  );
}

export default App;
