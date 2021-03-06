const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

//DB setup
mongoose.connect('mongodb://localhost:auth/auth');

//app setup
//morgan and bodyParser are middleware in express
//morgan--logging framework
//bodyParser-- parse incoming requests
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type:'*/*'}));//any incoming requests will be parsed into json
router(app);


//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log('Server listening on:',port);