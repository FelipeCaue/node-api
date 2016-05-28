'use strict';
var router = require('express').Router();
var bcrypt = require('bcryptjs');
var User = require('../models/user');

router.post('/', (req,res) => {

	var user = new User({
		username: req.body.user.username,
		email: req.body.user.email,
		passhash: bcrypt.hashSync(req.body.user.pwd, 10)

	});

 user.save().then(
 		(newuser) => {
 			res.json({
 				user: newuser,
 				message: 'success'
 			});
 		},
 		(err) => {
 			//res.send(500, err.message);
 			res.status(500).send(err.message);
 			console.log(err);
 		}
 	);
});
module.exports = router;