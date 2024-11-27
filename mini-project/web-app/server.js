const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  // Emit mock location updates
  setInterval(() => {
    const latitude = 37.7749 + (Math.random() - 0.5) * 0.1;
    const longitude = -122.4194 + (Math.random() - 0.5) * 0.1;
    socket.emit("locationUpdate", { latitude, longitude });
  }, 2000);

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
