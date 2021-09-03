const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

app.get("/", (req, res)=> { // route path matches requests to the root URL ("/")
  res.end("Welcome to my homepage!"); // sends message "Welcome to my homepage!"
});

app.get("/about",(req, res) => { // route path matches requests to "/about"
  res.end("Welcome to the about page!"); // sends message "Welcome to the about page!"
});

app.get("/contacts", (req, res)=> { // route path matches requests to "/contacts"
  res.end("Welcome to contacts page!"); // sends message "Welcome to contacts page!"
});

app.get("/hello/:who", (req, res) => { // route path matches requests to "/hello/:who"
  res.end("Hello, " + req.params.who + "."); // sends message greeting user by route parameter :who
})

app.get("/redirect_home",(req, res)=> { // route path matches requests to "/redirect_home"
  res.redirect("/"); // redirects to root URL ("/")
});

app.get("/sendnote", (req, res) => { // route path matches requests to "/sendnote"
  const filePath = path.resolve(__dirname, "notes.txt"); // gets filepath of notes.txt
  res.sendFile(filePath); // sends the file at file path of notes.txt
});

app.use((req, res) => { // matches requests to any URL
  res.statusCode = 404; // sets statuscode to 404
  res.end("404!"); // ends response; sends error message
});

  http.createServer(app).listen(3000); // Starts the server and listens on port 3000 for connections
