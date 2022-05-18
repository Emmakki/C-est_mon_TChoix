const mongoose= require('mongoose');
var Request = require("./Request_dilemme.js");
mongoose.connect('mongodb+srv://Emmakki:PwebEchecBDtc3@cluster0.vupjo.mongodb.net/Dilemme');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error!'));
db.once('open', function() {
  console.log("connecté à Mongoose")
});

Request.UpdateMode("alea");

Request.choixDilemme().then(function(res){console.log(res.split('|')[0])});
Request.choixDilemme().then(function(res){console.log(res)});


/*
const mongo = require('./mongo')

const connectToMongoDB = async () => {
  await mongo().then((mongoose) => {
    try {
      console.log('Connected to mongodb!')
    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()
*/
const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
  },
});

io.on("connection", (socket) => {
  Request.choixDilemme().then(function(res){socket.emit("start", res); console.log("envoi initial : "+res)});
  // réception d'un message envoyé par le client
  console.log("nouvelle connexion")
  socket.on("suivant", (...args) => {
    
    console.log(socket.id,":",args)
    
    Request.choixDilemme().then(function(res){socket.emit("fromServer", res)});

  });

  socket.on("cote", (...args) => {
    console.log(args);
  });

  socket.on("prop", (arg) => {
    Request.AddDilemme(arg);
    console.log(socket.id,":",arg)
  });
  



  socket.on("disconnect",()=>{
    console.log("déconnexion", socket.id);
  });
});


const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);
