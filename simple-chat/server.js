const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static('web'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/web/index.html');
});

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.on('disconnect', function(){
    	console.log('user disconnected');
  	});

	socket.on('chat message', function(msg){
		// console.log('message: ' + msg);
		io.emit('chat message', msg);
	});
});

server.listen(3000, () => {
	console.log('Started on port 3000');
});