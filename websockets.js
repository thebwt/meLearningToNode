var ws = requires('ws')

exports.connect=function (server) {
	var wss = ws.Server({server: server})
	wss.on('connection', function (ws) {
		ws.send('hello!')
	})
}
