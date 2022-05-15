const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
  },
});

io.on("connection", (socket) => {
  // réception d'un message envoyé par le client
  console.log("nouvelle connection")
  socket.on("test", (...args) => {
    console.log(socket.id,":",args)
  });
});


const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);
