const express = require('express')

let app = express()

// demo routes

app.get('/', (request, response) => {
	response.writeHead(200, { "Content-Type": "text/plain" });
	response.end("Server is running\n");
})

app.get('/hello', (request, response) => {
	response.writeHead(200, { "Content-Type": "application/json" });
	response.end('{"message":"Hello from server!"}');
})

app.get('/time', (request, response) => {
	response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
	response.end(new Date().toString());
})

app.listen(81, () => {
	console.log('Server is running');
});