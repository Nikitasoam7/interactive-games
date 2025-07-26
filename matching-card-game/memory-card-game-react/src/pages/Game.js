// src/pages/Game.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const emojiList = ['🍕', '🍔', '🍟', '🌮', '🍩', '🍓', '🍇', '🍒', '🍉', '🍎', '🥑', '🥦'];
const shuffle = (arr) => [...arr, ...arr].sort(() => Math.random() - 0.5);

const Game = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const level = query.get('level') || 'easy';

  const getLevelCount = () => {
    if (level === 'medium') return 8;
    if (level === 'hard') return 12;
    return 6;
  };

  const getGridCols = () => {
    if (level === 'medium') return 'grid-cols-4';
    if (level === 'hard') return 'grid-cols-6';
    return 'grid-cols-3';
  };

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [highScore, setHighScore] = useState(localStorage.getItem(`highScore-${level}`) || 'N/A');

  useEffect(() => {
    startGame();
  }, [level]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first].emoji === cards[second].emoji) {
        setMatched((prev) => [...prev, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
      setMoves((prev) => prev + 1);
    }
  }, [flipped]);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      clearInterval(intervalId);
      setGameOver(true);
      const best = localStorage.getItem(`highScore-${level}`);
      if (!best || Number(timer) < Number(best)) {
        localStorage.setItem(`highScore-${level}`, timer);
        setHighScore(timer);
      }
    }
  }, [matched]);

  useEffect(() => {
    if (intervalId) clearInterval(intervalId);
    const id = setInterval(() => setTimer((prev) => prev + 1), 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [cards]);

  const startGame = () => {
    const count = getLevelCount();
    const shuffled = shuffle(emojiList.slice(0, count)).map((emoji, i) => ({ id: i, emoji }));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTimer(0);
    setGameOver(false);
  };

  const handleFlip = (index) => {
    if (flipped.length < 2 && !flipped.includes(index) && !matched.includes(index)) {
      setFlipped((prev) => [...prev, index]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-blue-100 text-gray-800 dark:bg-gray-900 dark:text-white transition-colors">
      <div className="text-center py-4">
        <h1 className="text-3xl font-bold">🧠 Memory Match ({level.toUpperCase()})</h1>
        <p className="mt-2">Moves: {moves} | Timer: {timer}s | High Score: {highScore}s</p>
        {gameOver && <p className="mt-2 text-green-500 font-semibold">🎉 You Win!</p>}
        <div className="space-x-2 mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={startGame}
          >
            🔄 Restart
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            onClick={() => navigate('/')}
          >
            🔙 Back
          </button>
        </div>
      </div>

      <div className={`grid ${getGridCols()} gap-4 p-4 max-w-4xl mx-auto`}>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleFlip(index)}
            className={`w-20 h-28 md:w-24 md:h-32 cursor-pointer flex items-center justify-center rounded-lg text-3xl md:text-5xl shadow-md 
            ${flipped.includes(index) || matched.includes(index)
            ? 'bg-white dark:bg-gray-700'
            : 'bg-blue-200 dark:bg-gray-600'
            }`}
          >

            {(flipped.includes(index) || matched.includes(index)) ? card.emoji : '❓'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
