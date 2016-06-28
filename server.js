var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post')

var app = express();
app.use(bodyParser.json());
app.use('/api/posts',require('./controllers/api/posts'))

app.get('/', function (req, res) {
	res.sendfile('layouts/posts.html')
})
app.listen(8888,function() {
	console.log('Server Listening on', 8888)
})
