// server.js

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});
const cors = require('cors');
const bodyParser = require('body-parser');

// Enable CORS for Express
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
);

// Add body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define a route to handle POST requests to /api/message
app.post('', (req, res) => {
    // Log the received message to the console
    console.log('Received message:', req.body);
    // Emit a 'newMessage' event to all connected clients with the message content
    io.emit('newMessage', req.body.message);
    // Send a response back to the client indicating that the message was received
    res.send({ message: req.body.message });
});

// Start the server on port 8000
server.listen(8000, () => {
    console.log('Server listening on port 8000');
});

// Handle new client connections
io.on('connection', (socket) => {
    console.log('Client connected');

    // Listen for 'sendMessage' events from the client
    socket.on('sendMessage', (message) => {

        // Broadcast the message to all connected clients, excluding the sender
        socket.broadcast.emit('newMessage', message);
    });

    // Handle client disconnections
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});