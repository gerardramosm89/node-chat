const path       = require('path');
const http       = require('http');
const express    = require('express');
const socketIO   = require('socket.io');
var app          = express();
const publicPath = path.join(__dirname, '../public');
const port       = process.env.PORT || 3000;
var server       = http.createServer(app);
var io           = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New user connected");

  socket.emit('newMessage', {
    from : "gedfsdfrry@example.com",
    text: "Sample text from server",
    createdAt: 23
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on('createMessage', (data) => {
    console.log(`Create message is: ${JSON.stringify(data)}`);
  });
  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });
});
server.listen(port, () => {
  console.log(`App is listening on Port ${port}`);
});