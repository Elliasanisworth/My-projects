import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [playerChoice, setPlayerChoice] = useState("X");
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlayerVsAI, setIsPlayerVsAI] = useState(false);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (board) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const isBoardFull = (board) => board.every((cell) => cell);

  const handleClick = (index) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? playerChoice : playerChoice === "X" ? "O" : "X";
    setBoard(newBoard);

    const winner = calculateWinner(newBoard);
    if (winner) {
      handleGameEnd(winner);
    } else if (isBoardFull(newBoard)) {
      setDraws((prev) => prev + 1);
      setGameOver(true);
    } else {
      setIsXNext(!isXNext);
    }
  };

  const handleGameEnd = (winner) => {
    if (winner === "X") {
      setXWins((prev) => prev + 1);
    } else {
      setOWins((prev) => prev + 1);
    }
    setGameOver(true);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
  };

  const handleSymbolChoice = (symbol) => {
    setPlayerChoice(symbol);
    resetGame();
  };

  const handleAIMove = () => {
    const availableMoves = board
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);

    if (availableMoves.length > 0) {
      const aiMove = availableMoves[0]; // Simple AI: Picks the first available cell
      handleClick(aiMove);
    }
  };

  useEffect(() => {
    if (isPlayerVsAI && !isXNext && !gameOver) {
      const timer = setTimeout(() => handleAIMove(), 500);
      return () => clearTimeout(timer);
    }
  }, [isXNext, isPlayerVsAI, board, gameOver]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-400 to-purple-600 flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold mt-6 mb-4 drop-shadow-lg">Tic Tac Toe</h1>

      {/* Player vs AI Toggle */}
      <div className="mb-6">
        <p className="text-lg font-semibold mb-2">Game Mode:</p>
        <button
          onClick={() => setIsPlayerVsAI(false)}
          className={`px-4 py-2 rounded-md font-bold shadow-md transition mx-2 ${
            !isPlayerVsAI
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
        >
          Player vs Player
        </button>
        <button
          onClick={() => setIsPlayerVsAI(true)}
          className={`px-4 py-2 rounded-md font-bold shadow-md transition mx-2 ${
            isPlayerVsAI
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
        >
          Player vs AI
        </button>
      </div>

      {/* X/O Selector */}
      {!isPlayerVsAI && (
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2">Choose Your Symbol:</p>
          <button
            onClick={() => handleSymbolChoice("X")}
            className={`px-4 py-2 rounded-md font-bold shadow-md transition mx-2 ${
              playerChoice === "X"
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            X
          </button>
          <button
            onClick={() => handleSymbolChoice("O")}
            className={`px-4 py-2 rounded-md font-bold shadow-md transition mx-2 ${
              playerChoice === "O"
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            O
          </button>
        </div>
      )}

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`w-20 h-20 md:w-28 md:h-28 bg-white text-black text-3xl md:text-4xl font-bold flex items-center justify-center cursor-pointer border-2 ${
              gameOver ? "cursor-not-allowed" : "hover:bg-gray-200"
            }`}
            onClick={() => !isPlayerVsAI || isXNext ? handleClick(index) : null}
          >
            {cell}
          </div>
        ))}
      </div>

      {/* Game Status */}
      <div className="mb-6">
        {gameOver ? (
          calculateWinner(board) ? (
            <p className="text-xl font-semibold">
              {calculateWinner(board)} Wins!
            </p>
          ) : (
            <p className="text-xl font-semibold">It's a Draw!</p>
          )
        ) : (
          <p className="text-xl font-semibold">
            {isPlayerVsAI && !isXNext
              ? "AI is making its move..."
              : `Next Turn: ${
                  isXNext ? playerChoice : playerChoice === "X" ? "O" : "X"
                }`}
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button
          onClick={resetGame}
          className="px-6 py-3 bg-red-500 text-white font-bold rounded-md shadow-lg hover:bg-red-600 transition"
        >
          Restart Game
        </button>
      </div>

      {/* Score Counter */}
      <div className="mt-6 text-lg font-semibold">
        <p>X Wins: {xWins}</p>
        <p>O Wins: {oWins}</p>
        <p>Draws: {draws}</p>
      </div>
    </div>
  );
};

export default TicTacToe;
