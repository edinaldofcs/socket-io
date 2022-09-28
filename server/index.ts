import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import "dotenv/config";

import socketRoutes from "./src/routes/socketRoutes";
import roomRoutes from "./src/routes/roomRoutes";
import MessageController from "@src/controllers/MessageController";
import RoomController from "@src/controllers/RoomController";

const app = express();
const port = `${process.env.PORT || 5001}`;
const conn = require("./src/db/conn");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", socketRoutes.routes);
app.use("/rooms", roomRoutes.routes); 

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`Usuário conectado: ${socket.id}`);
 
  socket.on("entrar", async (sala) => {
    console.log(`Usuário entrou na sala: ${sala}`);   
    await RoomController.createRoom(sala, socket);
  });

  socket.on("sendMessage", async (msg) => {
    const dataTime = new Date(Date.now());

    await MessageController.createMessageOnSocket({ ...msg, dataTime });
  });

  socket.on("disconnect", () => {
    console.log("Usuário desconectado", socket.id);
  }); 
});
 
conn
  // .sync()
  .sync({force: true})
  .then(() => {
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err: any) => console.log(err));
