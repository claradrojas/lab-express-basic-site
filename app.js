// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route --> home
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// our second Route --> about
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// our third Route --> works
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// Server Started
app.listen(3000) 
