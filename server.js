// requires
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// require routers
var indexRouter = require('./routes/index');
var clicksRouter = require('./routes/clicks');

//middleware
app.use(bodyParser.json());
app.use(express.static('public')); // public folder

//use routes
app.use('/', indexRouter);
app.use('/photos', clicksRouter);

app.listen(3000, function () {
    console.log('listening on 3000');
});
