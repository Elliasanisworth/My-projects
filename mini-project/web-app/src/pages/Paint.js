import React, { useState, useRef, useEffect } from "react";

const Paint = () => {
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = color;
    context.lineWidth = brushSize;
    contextRef.current = context;
  }, [color, brushSize]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const toggleEraser = () => {
    setIsEraser(!isEraser);
    contextRef.current.strokeStyle = isEraser ? color : "#ffffff";
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-teal-400 to-blue-600 flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold mt-6 mb-4 drop-shadow-lg">2D Paint</h1>

      {/* Brush and Eraser Controls */}
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
            if (!isEraser) contextRef.current.strokeStyle = e.target.value;
          }}
          className="w-12 h-12 border-2 border-white rounded-full"
        />
        <span className="text-lg font-semibold">Brush Color</span>

        <div className="flex items-center space-x-2">
          <label className="text-lg font-semibold">Brush Size</label>
          <input
            type="range"
            min="1"
            max="50"
            value={brushSize}
            onChange={(e) => setBrushSize(e.target.value)}
            className="w-32"
          />
        </div>

        <button
          onClick={toggleEraser}
          className={`px-4 py-2 rounded-md font-bold shadow-md transition ${
            isEraser
              ? "bg-red-400 hover:bg-red-500"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          {isEraser ? "Eraser On" : "Eraser Off"}
        </button>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="bg-white rounded-lg shadow-lg cursor-crosshair"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{
          border: "2px solid #000",
          width: "800px",
          height: "500px",
        }}
      ></canvas>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4 mt-6">
        <button
          onClick={clearCanvas}
          className="px-6 py-3 bg-red-500 text-white font-bold rounded-md shadow-lg hover:bg-red-600 transition"
        >
          Clear Canvas
        </button>
        <button
          onClick={saveCanvas}
          className="px-6 py-3 bg-green-400 text-white font-bold rounded-md shadow-lg hover:bg-green-500 transition"
        >
          Save Drawing
        </button>
      </div>
    </div>
  );
};

export default Paint;
