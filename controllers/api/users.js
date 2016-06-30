var router = require('express').Router()
var User = require('../../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')

router.get('/', function (req,res) {
	var auth = jwt.decode(req.headers['x-auth'], config.secret)
	User.findOne({username: auth.username}, function (err, user) {
	res.send(user)
	})
})

router.post('/', function (req, res, next) {
	var user = User({username: req.body.username})
	console.log(user)
		bcrypt.hash(req.body.password, 10, function (err, hash) {
			user.password = hash
			console.log(user)
			user.save(function (err, user) {
			if (err) { throw next (err) }
			res.status(201).send()
			})
		})
})

module.exports = router
