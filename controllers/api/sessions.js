var router = require('express').Router()
var User = require('../../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')

router.post('/', function (req, res){
	User.findOne({username: req.body.username})
		.select('password')
		.select('username')
		.exec(function (err, user) {
			if (err) {return next(err) }
			if (!user) {return res.status(401).send()}
			console.log(user)
			bcrypt.compare(req.body.password, user.password, function (err, valid) {
				if (err) {return next(err) }
				if (!valid) { return res.status(401).send()}
				var theStuff = {username: user.username}
				console.log(theStuff)
				var token = jwt.encode(theStuff, config.secret)
				res.json(token)
			})
		})
})

module.exports = router
