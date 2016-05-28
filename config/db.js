'use strict';
var db = require('mongoose');

//db.connect('mongodb://root:1q2w3e@ds019063.mlab.com:19063/node-api');

db.connect('mongodb://root:1q2w3e@ds019063.mlab.com:19063/node-api', (err) =>{
	if(err){
		console.log(err);
	}else{
		console.log('Conctado no mongolab');
	}
});
module.exports = db;