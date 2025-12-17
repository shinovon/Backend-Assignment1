const { randomUUID } = require('crypto');
const express = require('express');
const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.json');

let app = express();

app.use(express.json());

// demo routes

app.get('/', (request, response) => {
	response.writeHead(200, { "Content-Type": "text/plain" });
	response.end("Server is running\n");
})

app.get('/hello', (request, response) => {
	response.status(200).send({message: "Hello from server!"});
})

app.get('/time', (request, response) => {
	response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
	response.end(new Date().toString());
})

function getData() {
	return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
}

function writeData(data) {
	fs.writeFileSync(dataFile, JSON.stringify(data));
}

// crud api

app.get('/objects', (request, response) => {
	response.sendFile(dataFile);
});

app.post('/objects', (request, response) => {
	let name = request.body.name;
	let data = getData();
	const id = randomUUID();
	console.log("POST " + id);
	data.objects.push({name: name, id: id});
	writeData(data);
	response.status(200).send({success: true, object: {name: name, id: id}});
});

app.put('/objects/{:id}', (request, response) => {
	let data = getData();
	let found = false;
	const id = request.params.id;
	console.log("PUT " + id);
	for (const obj of data.objects) {
		if (obj.id == id) {
			obj.name = request.body.name;
			found = obj;
			break;
		}
	}
	if (!found) {
		response.status(404).send({error: "Object not found"});
	} else {
		writeData(data);
		response.status(200).send({success: true, object: found});
	}
});

app.delete('/objects/{:id}', (request, response) => {
	let data = getData();
	const id = request.params.id;
	console.log("DELETE " + id);
	let found = false;
	for (const obj of data.objects) {
		if (obj.id == id) {
			found = obj;
			break;
		}
	}
	if (!found) {
		response.status(404).send({error: "Object not found"});
	} else {
		let newObjects = data.objects.filter(a => a.id != id);
		let newData = {objects: newObjects};
		writeData(newData);
		response.status(200).send({success: true, object: found});
	}
	
});

// frontend

app.get('/front', (request, response) => {
	response.sendFile(__dirname + '/front.html');
});

app.listen(81, () => {
	console.log('Server is running');
});