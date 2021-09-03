const express = require("express");
const http = require("http");

const app = express();

app.use((req, res) => { // matches requests to any URL
	res.writeHead(200, { "Content-Type": "text/plain" }); // sends a response header to the request with http status code 200 and plain text formatting.
	res.end("Hello, World!"); // ends response; sending string "Hello, World!" to header
});

http.createServer(app).listen(3000); // starts the server and listens on port 3000 for connections
