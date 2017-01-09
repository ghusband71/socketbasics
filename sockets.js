var PORT = process.env.PORT || 3000;
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var moment = require("moment");
var now = moment();

app.use(express.static(__dirname + "/public"));

io.on("connection", function (socket){
	console.log("user connected via socket.io");

	socket.on("message", function(message){
		console.log("Message received..." + message.text);

		//io.emit sends to everbody
		io.emit("message", message);
		// sends to everybody except the sender
		// socket.broadcast.emit("message", message);
	})

	socket.emit("message", {
		text: "Welcome to the chat application!"
	});
});

http.listen(PORT, function() {
	console.log("server stated");
})

// can run this from chrome dev tools console to send message to others
//socket.emit("message", { text: "Welcome to the chat application!" });