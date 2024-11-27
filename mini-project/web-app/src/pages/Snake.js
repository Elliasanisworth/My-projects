import React, { useState, useEffect } from "react";

// Game settings
const gridSize = 20; // Number of cells along one side of the grid
const cellSize = 400 / gridSize; // Cell size in pixels
const initialSnake = [
  { x: 2, y: 2 },
  { x: 1, y: 2 },
  { x: 0, y: 2 },
];
const initialDirection = "RIGHT"; // Snake starts moving right

const SnakeGame = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(generateFood());
  const [direction, setDirection] = useState(initialDirection);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Generate random food position within bounds
  function generateFood() {
    let foodX, foodY;
    do {
      foodX = Math.floor(Math.random() * gridSize);
      foodY = Math.floor(Math.random() * gridSize);
    } while (snake.some((segment) => segment.x === foodX && segment.y === foodY));
    return { x: foodX, y: foodY };
  }

  // Check if the snake's head is out of bounds
  function isOutOfBounds(head) {
    return head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize;
  }

  // Check if the snake collides with itself
  function isSelfCollision(head) {
    return snake.some((segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y);
  }

  // Handle key events for snake movement (Arrow keys and WSAD)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameOver) return;

      switch (event.key.toLowerCase()) {
        case "arrowup":
        case "w":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "arrowdown":
        case "s":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "arrowleft":
        case "a":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "arrowright":
        case "d":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, gameOver]);

  // Update the snake movement
  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      const newSnake = [...snake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case "UP":
          head.y -= 1;
          break;
        case "DOWN":
          head.y += 1;
          break;
        case "LEFT":
          head.x -= 1;
          break;
        case "RIGHT":
          head.x += 1;
          break;
        default:
          break;
      }

      // Add the new head
      newSnake.unshift(head);

      // Check for collisions
      if (isOutOfBounds(head) || isSelfCollision(head)) {
        setGameOver(true);
        return;
      }

      // Check for food consumption
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 1);
        setFood(generateFood()); // Generate new food
      } else {
        // Remove the tail if no food is eaten
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameInterval = setInterval(moveSnake, 200); // Snake moves every 200ms
    return () => clearInterval(gameInterval);
  }, [snake, direction, food, gameOver]);

  // Render game
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-4xl mb-4">Snake Game</h1>
      <div className="w-[400px] h-[400px] bg-black border-4 border-white relative">
        {/* Render snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            style={{
              left: `${segment.x * cellSize}px`,
              top: `${segment.y * cellSize}px`,
              width: `${cellSize}px`,
              height: `${cellSize}px`,
            }}
            className="absolute bg-green-500"
          ></div>
        ))}

        {/* Render food */}
        <div
          style={{
            left: `${food.x * cellSize}px`,
            top: `${food.y * cellSize}px`,
            width: `${cellSize}px`,
            height: `${cellSize}px`,
          }}
          className="absolute bg-red-500"
        ></div>
      </div>

      {gameOver && (
        <div className="mt-4 text-xl text-red-600 flex flex-col items-center">
          <p>Game Over! Your Score: {score}</p>
          <button
            onClick={() => {
              setSnake(initialSnake);
              setDirection(initialDirection);
              setFood(generateFood());
              setGameOver(false);
              setScore(0);
            }}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
          >
            Restart
          </button>
        </div>
      )}

      {!gameOver && (
        <div className="mt-4 text-xl text-white">
          <p>Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
