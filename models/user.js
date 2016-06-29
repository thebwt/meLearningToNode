var db = require('../db')

var user = db.Schema({
	username: String,
	password: {type: String , select: false}
})

module.exports = mongoose.model('User', user)

