import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const startGame = (level) => {
    navigate('/game', { state: { level } });
  };

  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">🧠 Memory Match Game</h1>
      <p className="mb-4 text-lg">Choose a difficulty level to start playing:</p>
      <div className="flex flex-col items-center gap-4">
        <button onClick={() => startGame('easy')} className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded">Easy (6 pairs)</button>
        <button onClick={() => startGame('medium')} className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded">Medium (8 pairs)</button>
        <button onClick={() => startGame('hard')} className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded">Hard (12 pairs)</button>
      </div>
    </div>
  );
};

export default Home;
