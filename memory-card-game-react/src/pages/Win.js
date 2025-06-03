import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Win() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-100 text-black">
      <h1 className="text-4xl font-bold mb-4">🎉 You Won!</h1>
      <p className="text-xl mb-2">Your Score: {state?.score}</p>
      <button onClick={() => navigate("/")} className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">🏠 Back to Home</button>
    </div>
  );
}
