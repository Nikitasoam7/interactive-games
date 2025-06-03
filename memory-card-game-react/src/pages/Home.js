// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = (level) => {
    navigate(`/game?level=${level}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">🎮 Memory Match Game</h1>
      <div className="flex flex-col space-y-4">
        <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleStart('easy')}>Easy (6 Pairs)</button>
        <button className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600" onClick={() => handleStart('medium')}>Medium (8 Pairs)</button>
        <button className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => handleStart('hard')}>Hard (12 Pairs)</button>
      </div>
    </div>
  );
};

export default Home;
