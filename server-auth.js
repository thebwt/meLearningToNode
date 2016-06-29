var express = require('express')
var jwt = require('jwt-simple')
var _ = require('lodash')
var app = express()
var bcrypt = require('bcrypt')
app.use(require('body-parser').json())

var users = [{username: 'thebwt', password: '$2a$10$phRVC5z4xFF6RkQlHNuPOeOLQj0QwDkDk4PSVXPrA//rrzR6ktkSu'}]
var secretKey = 'supersecretkey'

app.post('/session', function (req, res){
	var user = findUserByUsername(req.body.username)
	validateUser(user,req.body.password, function (err, valid) {
		if (err || !valid) {return res.status(401).send() }
		var token = jwt.encode({username: user.username}, secretKey)
		res.json(token)
	})
})

app.get('/user', function (req,res) {
	var token = req.headers['x-auth']
	var user = jwt.decode(token, secretKey)
	//TODO: grab the user from the DB
	res.send(user)
})

function findUserByUsername(username) {
	return _.find(users, {username, username})
}

function validateUser(user, password, cb) {
	bcrypt.compare(password, user.password, cb)
}

app.listen(3000)
