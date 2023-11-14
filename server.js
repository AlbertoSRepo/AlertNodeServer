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

    socket.on('invia_messaggio', (messaggio) => {
        io.emit('messaggio', messaggio); // Inoltra il messaggio a tutti i client connessi
    });
});

server.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});

