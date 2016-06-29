var express = require('express')
var router = express.Router()

router.use(express.static(__dirname + '/../assets'))

router.get('/', function (req, res) {
	res.sendFile('layouts/posts.html', { root: __dirname+'/..'})
})

module.exports = router
