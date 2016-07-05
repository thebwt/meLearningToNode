var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var aws = require('./websockets')

app.use(bodyParser.json());
app.use(require('./auth'))

app.use('/api/posts',require('./controllers/api/posts'))
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))
app.use('/', require('./controllers/static'))

var server = app.listen(8888,function() {
	console.log('Server Listening on', 8888)
})
aws.connect(server)
