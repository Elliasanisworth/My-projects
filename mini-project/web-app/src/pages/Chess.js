import React, { useState } from "react";
import Chessboard from "chessboardjsx";  // You can install chessboardjsx or use a custom board.

const Chess = () => {
  const [game, setGame] = useState(new Chess());
  const [gameOver, setGameOver] = useState(false);

  const makeMove = (move) => {
    const newGame = { ...game };
    newGame.ugly_move(move);
    setGame(newGame);
    setGameOver(newGame.game_over());
  };

  return (
    <div className="game-container">
      <h1 className="text-2xl font-bold mb-4">Chess Game</h1>
      <div className="mb-4">
        <Chessboard
          position={game.fen()}
          onDrop={(move) => makeMove(move)}
          width={400}
        />
      </div>
      {gameOver && <div className="game-over text-xl text-red-600">Game Over</div>}
    </div>
  );
};

export default Chess;
