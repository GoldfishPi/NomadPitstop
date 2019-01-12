const express = require('express');
const http = require('http');
const path = require('path');
const api = require('./server/routes/api');
const fs = require('fs');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');
const appDir = path.resolve( __dirname + "/dist/nomadpitstops" );

let creds = fs.readFileSync('./config.json', 'utf8');
creds = JSON.parse(creds);

mongoose.connect(`mongodb://${creds.db_username}:${creds.db_password}@ds139243.mlab.com:39243/nomad_pitstops`);
mongoose.connection.on('connected', function() {
    console.log('Connected to db')
});

const port = process.env.PORT || 3000;

app.use(express.static(appDir));
app.use(cors());
app.use(bodyParser.json());

app.use('/api', api);

app.get('*', (req, res) => {
	res.sendfile( path.resolve( appDir, "index.html" ) );
        console.log('this is ok');
});

const server = http.createServer(app);

server.listen(port, () => console.log('Running'));
