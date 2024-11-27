import React, { useState, useEffect, useCallback } from "react";
import "./Snake.css";

const boardSize = 20; // Size of the grid
const initialSnake = [{ x: 10, y: 10 }]; // Initial snake position
const initialFood = { x: 5, y: 5 }; // Initial food position

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * boardSize),
  y: Math.floor(Math.random() * boardSize),
});

const Snake = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [direction, setDirection] = useState({ x: 0, y: 0 }); // Start with no movement
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Debugging: Log the direction and key press
  const handleKeyDown = useCallback(
    (e) => {
      e.preventDefault(); // Prevent default behavior (e.g., scrolling)
      console.log("Key pressed: ", e.key); // Log the key press for debugging

      // Handle movement based on key pressed
      switch (e.key) {
        case "w": // Move up
          if (direction.y === 0) {
            console.log("Moving up");
            setDirection({ x: 0, y: -1 });
          }
          break;
        case "s": // Move down
          if (direction.y === 0) {
            console.log("Moving down");
            setDirection({ x: 0, y: 1 });
          }
          break;
        case "a": // Move left
          if (direction.x === 0) {
            console.log("Moving left");
            setDirection({ x: -1, y: 0 });
          }
          break;
        case "d": // Move right
          if (direction.x === 0) {
            console.log("Moving right");
            setDirection({ x: 1, y: 0 });
          }
          break;
        default:
          break;
      }
    },
    [direction] // Only change direction if it's valid (no opposite direction)
  );

  // Debugging: Log movement and game state updates
  const moveSnake = useCallback(() => {
    if (direction.x === 0 && direction.y === 0) return; // Don't move if no direction set

    const head = snake[0];
    const newHead = { x: head.x + direction.x, y: head.y + direction.y };

    // Debugging: Log new head position and snake state
    console.log("Snake head position: ", newHead);
    console.log("Snake body: ", snake);

    // Check for boundary collisions or self-collision
    if (
      newHead.x < 0 ||
      newHead.x >= boardSize ||
      newHead.y < 0 ||
      newHead.y >= boardSize ||
      snake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
    ) {
      setIsGameOver(true);
      console.log("Game Over");
      return;
    }

    const newSnake = [newHead, ...snake];

    // Check if snake eats food
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(getRandomPosition());
      setScore((prev) => prev + 1);
      console.log("Food eaten. Score: ", score);
    } else {
      newSnake.pop(); // Remove tail if no food eaten
    }

    setSnake(newSnake);
  }, [snake, direction, food]);

  // Restart game logic
  const restartGame = () => {
    setSnake(initialSnake);
    setFood(initialFood);
    setDirection({ x: 0, y: 0 });
    setIsGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    if (!isGameOver) {
      const interval = setInterval(moveSnake, 200); // Adjust snake speed here
      return () => clearInterval(interval);
    }
  }, [moveSnake, isGameOver]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="game-container">
      {isGameOver ? (
        <div className="game-over">
          <h1>Game Over</h1>
          <p>Score: {score}</p>
          <button onClick={restartGame} className="restart-btn">
            Restart
          </button>
        </div>
      ) : (
        <div className="board">
          {Array.from({ length: boardSize }).map((_, row) => (
            <div className="row" key={row}>
              {Array.from({ length: boardSize }).map((_, col) => {
                const isSnake = snake.some((segment) => segment.x === col && segment.y === row);
                const isFood = food.x === col && food.y === row;
                return (
                  <div
                    key={col}
                    className={`cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Snake;
