const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var path = require ('path');
const mongoose = require('mongoose')
const morgan = require('morgan');
var cookieParser = require('cookie-parser');
var createError = require('http-errors');

var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb+srv://jordancombs9:Z7ljvndfyilssrm*@cluster0-ws5ow.mongodb.net/database?retryWrites=true&w=majority';


const app = express();

const routes = require('./routes/api');
var awsCtrl = require("./awsCtrl");

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true
}));
app.use(morgan('dev'));
app.use(cookieParser());

mongoose.connection.on('connected', () => {
console.log('Mongoose is connected');
});

app.use(cors());
app.use(morgan('tiny'));
app.use('/api', routes);
app.use('/sign_s3', awsCtrl);


mongoose.connect(uri, {
useNewUrlParser: true,
useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


module.exports = app;
