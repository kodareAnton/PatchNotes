var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017',{
    useUnifiedTopology: true
})
.then(client => {
    console.log('Du är uppkopplad till databasen');
    // kolla om users är något annat
    const db = client.db('mydbusers');
    app.locals.db = db;
})

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => {
    res.status(200).send('Ok');
  });

// app.listen(port, () => {
//     console.log('Node server up and running: http://localhost:${port}')
//   })

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;