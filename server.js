'use strict';
var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var morgan = require('morgan');

app.use(morgan('combined'));

app.use(bodyParser.json());

app.use('/test',function(req,res){
	res.send('hello word');
});

app.use('/api/users', require('./routes/users'));

app.listen(3000, function(){
	console.log('app listening on port 3000');
});
