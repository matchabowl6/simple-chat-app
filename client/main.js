const { io } = require("socket.io-client");
const socket = io(); // This is fine since currently, the WebSocket server and the server serving the website are the same
socket.on("connect", () => {
    console.log("Connected to:", socket.id);
});
