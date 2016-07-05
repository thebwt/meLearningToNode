var ws = require('ws')
var ld = require('lodash')
var clients = []

exports.connect=function (server) {
	var wss = ws.Server({server: server})
	wss.on('connection', function (ws) {
		ws.send('hello!')
		clients.push(ws)

		ws.on('close', function () {
			ld.remove(clients, ws)
		})
	})
}

exports.broadcast = function (topic, data) {
	var json = JSON.stringify({topic: topic, data: data})
	clients.forEach(function (client) {
		client.send(json)
	})
}
