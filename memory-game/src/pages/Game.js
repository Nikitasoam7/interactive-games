import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Game.css'; // Make sure this file exists or comment it out

const emojis = ['🐶', '🐱', '🐻', '🐼', '🦊', '🐸', '🐵', '🦁', '🐮', '🐷', '🐔', '🐧'];

function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const level = location.state?.level || 'easy';

  const levelPairs = {
    easy: 6,
    medium: 8,
    hard: 12,
  };

  const numPairs = levelPairs[level] || 6;

  const generateShuffledCards = () => {
    const selectedEmojis = emojis.slice(0, numPairs);
    const pairs = [...selectedEmojis, ...selectedEmojis];
    return pairs
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
  };

  const [cards, setCards] = useState(generateShuffledCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCount, setMatchedCount] = useState(0);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].emoji === cards[second].emoji) {
        const updatedCards = cards.map((card, idx) =>
          idx === first || idx === second ? { ...card, isMatched: true } : card
        );
        setCards(updatedCards);
        setFlippedCards([]);
        setMatchedCount((prev) => prev + 1);
      } else {
        setTimeout(() => {
          const updatedCards = cards.map((card, idx) =>
            idx === first || idx === second ? { ...card, isFlipped: false } : card
          );
          setCards(updatedCards);
          setFlippedCards([]);
        }, 800);
      }
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matchedCount === numPairs) {
      setTimeout(() => navigate('/win'), 500);
    }
  }, [matchedCount]);

  const handleCardClick = (index) => {
    if (cards[index].isFlipped || cards[index].isMatched || flippedCards.length === 2) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, index]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 transition-all">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-yellow-300 mb-4">
        Level: {level.charAt(0).toUpperCase() + level.slice(1)}
      </h2>

      <div
        className={`grid gap-4 ${
          numPairs === 6
            ? 'grid-cols-3'
            : numPairs === 8
            ? 'grid-cols-4'
            : 'grid-cols-6'
        }`}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white dark:bg-gray-700 shadow-lg rounded-lg cursor-pointer flex items-center justify-center text-3xl sm:text-4xl transition-transform duration-300 ${
              card.isFlipped || card.isMatched ? 'rotate-y-180' : ''
            }`}
            onClick={() => handleCardClick(index)}
          >
            {card.isFlipped || card.isMatched ? card.emoji : '❓'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
