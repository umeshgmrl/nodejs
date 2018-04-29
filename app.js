const express = require('express');
const util = require('util');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

// app.get('/', (req, res) => {
// 	res.send('<h1>this is get method</h1>');
// });

// app.post('/', (req, res) => {
// 	res.send('<h1>this is post method</h1>');
// });

// app.put('/', (req, res) => {
// 	res.send('<h1>this is put method</h1>');
// });

// app.delete('/', (req, res) => {
// 	res.send('<h1>this is delete method</h1>');
// });

// app.use('*', (req, res) => {
// 	res.send('this works');
// });
const requireLogin = (req, res, next) => {
	if (req.body.username === 'shakeer' && req.body.password === 'qwerty123') {
		next();
	} else {
		req.send('credentials are invalid');
	}
};

app.post('/login', (req, res) => {
	console.log(req.body);
	res.send(util.inspect(req));
});

app.listen(port);
