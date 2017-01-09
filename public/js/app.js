var room = getQueryVariable("room");
var name = getQueryVariable("name") || "Anonymous";

var socket = io();

socket.on("connect", function(){
	console.log("connected to socket.io server");
});

socket.on("message", function(message) {
	var momentTimestamp = moment.utc(message.timestamp);
	var $message = jQuery(".messages");

	console.log("new message...");
	console.log(momentTimestamp.local().format("h:mm a") + ": " + message.text);

	$message.append("<p><strong>" + message.name + " " + momentTimestamp.local().format("h:mm a") + "</strong></p>");
	$message.append("<p>" + message.text + "</p>");

	//jQuery(".messages").append("<p><strong>" + momentTimestamp.local().format("h:mm a") + ": </strong>" + message.text + "</p>")
});

//console.log("The name is " + name + ", and the room is " + room);

// handles submitting of new message
var $form = jQuery("#message-form");

$form.on("submit", function(event){
	event.preventDefault();

	var $message = $form.find("input[name=message]");

	socket.emit("message", {
		name: name,
		text: $message.val()
	});

	$message.val("");
});