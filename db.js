var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/social', function () {
		console.log('mongodb connect')
		})
module.exports = mongoose
