// const express = require('express');
// const url = require('url');
// const util = require('util');

// const app = express();
// app.get('/', (request, response) => {
// 	response.send('<h1>Homepage</h1>');
// });
// app.get('/about', (request, response) => {
// 	response.send('<h1>about</h1>');
// });
// app.get('/services', (request, response) => {
// 	response.send('<h1>services</h1>');
// });
// app.get('/faq', (request, response) => {
// 	response.send('<h1>faq</h1>');
// });
// app.get('*', (request, response) => {
// 	response.setHeader('content-type', ' text/json');
// 	response.send(request.url);
// });

// app.listen(8080, 'localhost');

// //-------------------------------------
const url = require('url');
const http = require('http');
const fs = require('fs');

http
	.createServer(function(request, response) {
		if (request.url === '/') {
			fs.readFile('hello.txt', { encoding: 'utf8' }, (err, content) => {
				if (err) return console.error(err);
				response.setHeader('content-type', 'text/html');
				response.end(content);
			});
		}
	})
	.listen(80);
