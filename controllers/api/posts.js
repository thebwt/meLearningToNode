var Post = require('../../models/post')
var websockets = require('../../websockets')

var router = require('express').Router()

router.get('/', function(req,res,next) {
	Post.find(function(err, posts) {
	if (err) {return next(err)}
		res.json(posts)
	})
})

router.post('/', function (req,res,next) {
	var post = new Post({
		username: req.auth.username,
		body: req.body.body
	})
	post.save(function (err, post) {
		if (err) {return next(err) }
		websockets.broadcast('new_post', post)
		res.status(201).json(post)
	})
})

module.exports = router
