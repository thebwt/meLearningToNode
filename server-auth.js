var express = require('express')
var jwt = require('jwt-simple')
var _ = require('lodash')
var app = express()
var bcrypt = require('bcrypt')
app.use(require('body-parser').json())

//var users = [{username: 'thebwt', password: '$2a$10$phRVC5z4xFF6RkQlHNuPOeOLQj0QwDkDk4PSVXPrA//rrzR6ktkSu'}]
var secretKey = 'supersecretkey'

var User = require('./user')

app.post('/session', function (req, res){
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
				var token = jwt.encode(theStuff, secretKey)
				res.json(token)
			})
		})
})

app.get('/user', function (req,res) {
	var token = req.headers['x-auth']
	var auth = jwt.decode(token, secretKey)
	User.findOne({username: auth.username}, function (err, user) {
	res.send(user)
	})
})

app.post('/user', function (req, res, next) {
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


app.listen(3000)
