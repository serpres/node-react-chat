const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const port = process.env.PORT || 3001;

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`Connected user: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data.room);
    socket.emit("user_init", { username: data.username, id: socket.id });
    console.log(
      `User: ${data.username} with ID: ${socket.id} joined room: ${data.room}`
    );
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(`Disconnected user: ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
