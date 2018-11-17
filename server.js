const express = require('express');
const http = require('http');
const path = require('path');
const api = require('./server/routes/api');
const fs = require('fs');

const app = express();
const mongoose = require('mongoose');

let creds = fs.readFileSync('./config.json', 'utf8');
creds = JSON.parse(creds);

mongoose.connect(`mongodb://${creds.db_username}:${creds.db_password}@ds139243.mlab.com:39243/nomad_pitstops`);
mongoose.connection.on('connected', function() {
    console.log('Connected to db')
});

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/dist/nomadpitstops'));

app.use('/api', api);

app.get('*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log('Running'));