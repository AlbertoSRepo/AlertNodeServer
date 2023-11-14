const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Permette a qualsiasi dominio di connettersi
        methods: ["GET", "POST"] // Metodi HTTP permessi
    }
});

io.on('connection', (socket) => {
    console.log('Un client si è connesso');
    
    setInterval(() => {
        socket.emit('messaggio', 'Ciao dal server!');
    }, 60000); // invia un messaggio ogni 60 secondi
});

server.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});


