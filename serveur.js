var mongoose = require('mongoose');
var Request = require("./Request_dilemme.js");

mongoose.connect('mongodb+srv://Emmakki:PwebEchecBDtc3@cluster0.vupjo.mongodb.net/Dilemme');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error!'));
db.once('open', function() {
  console.log("connecté à Mongoose")
});

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
var myroom='';
console.log(socket.id );
socket.on('chat message', (msg) => {
    myroom= msg;   
    socket.join(msg);
    console.log('nouveau connecté dans le ' + msg  );

    
    });

    socket.on('ping', (msg) => { // type de message et contenue 
        //io.sockets.in(myroom).emit('message', msg );   // fonction appeler ensuite
        
        console.log("ping recu");

    });

    server.listen(3000, () => {
        console.log('listening on *:3000');
    });
  })
