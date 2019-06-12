const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

/* url de conexão do MongoDB */
const connection = require('./config/connection');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(connection.url, {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    
    req.io = io;

    next();
});

app.use(cors());

// acesso para a pasta de imagens
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);