  var socket = io();

  socket.on('connect', function() {
    console.log("Connected to server");

  });

  socket.on('disconnected', function() {
    console.log("Disconnected from server");
  });

  socket.on('newMessage', function (message){

    console.log('New Message', message);
  })