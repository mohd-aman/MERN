// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log("connected");
    eventEmitter.emit("data_recieved");
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_recieved',function(){
    console.log("data recieved successfully");
})

eventEmitter.on("data_recieved",function(){
    console.log("new listener added");
})

eventEmitter.emit("connection");