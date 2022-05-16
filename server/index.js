const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
  },
});

io.on("connection", (socket) => {
  // réception d'un message envoyé par le client
  console.log("nouvelle connexion")
  socket.on("test", (...args) => {
    console.log(socket.id,":",args)
    
    socket.emit("fromServer", ["Chien", "Chat"]);

  });

  socket.on("disconnect",()=>{
    console.log("déconnexion", socket.id);
  });
});


const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);
