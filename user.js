var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/auth_demo')

var user = mongoose.Schema({
	username: String,
	password: String
})

module.exports = mongoos.model('User', user)

