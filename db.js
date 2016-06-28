var mongoose = require('mongoose')

mongoos.connect('mongodb://localhost/social', function () {
		console.log('mongodb conenct')
		})
module.exports = mongoose
