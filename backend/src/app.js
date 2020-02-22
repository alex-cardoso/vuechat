require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const socket = require('socket.io');

const app = express();
const http = require('http').Server(app);

app.use(express.json());
app.use(cors());
app.use(helmet());

const io = socket(http);

let messages = [];

io.on('connection', function(socket) {
    socket.on('message', message => {
        messages.push(messages);
        socket.broadcast.emit('received', message);
    });
});

app.use('/', require('../src/routes'));

http.listen(process.env.PORT || 3000);
