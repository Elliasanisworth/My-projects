import React, { useState } from "react";
import * as ChessJS from "chess.js";
import { Chessboard } from "react-chessboard";

const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());

  const makeMove = (move) => {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    if (result) {
      setGame(gameCopy);
    }
    return result;
  };

  const onDrop = (sourceSquare, targetSquare) => {
    const move = makeMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // Always promote to a queen
    });

    if (move === null) return false; // Illegal move
    setTimeout(() => makeAIMove(), 500); // AI moves after 500ms
    return true;
  };

  const makeAIMove = () => {
    const possibleMoves = game.moves();
    if (possibleMoves.length === 0) return; // Game over

    const randomMove =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    game.move(randomMove);
    setGame(new Chess(game.fen()));
  };

  const resetGame = () => {
    setGame(new Chess());
  };

  return (
    <div className="chessboard-container">
      <h1>Chess Game</h1>
      <div className="chessboard">
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          boardWidth={600} // Chessboard size
        />
      </div>
      <button onClick={resetGame} className="reset-button">
        Restart Game
      </button>
    </div>
  );
};

export default ChessGame;
