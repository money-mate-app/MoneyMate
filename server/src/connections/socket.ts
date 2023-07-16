import { Server } from "socket.io";
import { server } from "./server";

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});


io.on("connection", async (socket) => {
  console.info("[socket]: socket running")
  const userId = socket.handshake.headers.user_id ?? socket.id;
  if (!userId) return;
  console.info(`[socket]: ${userId} joined to socket`);

  socket.join(userId);
  socket.on("disconnect", () => {
    console.info("user disconnected", socket.id);
  });
});

export default io;
