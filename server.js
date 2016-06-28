var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

getFunc = 


app.get('/api/posts', function(req,res) {
	res.json([{
			username: 'dickeryxxx',
			body: 'this is neater'
	}])})

app.post('/api/posts', function (req,res) {
	console.log('post recieved!');
	console.log(req.body.username);
	console.log(req.body.body);
	res.send(201);
})

app.listen(8888,function() {
	console.log('Server Listening on', 8888)
})
