const http = require('http');
const fs = require('fs');
const port = 80;

const server = http.createServer((req, res) => {
	const filePath = req.url == '/' ? 'index.js' : `./${req.url}`;
	fs.exists(filePath, fileExists => {
		if (fileExists) {
			try {
				fs.readFile(filePath, (err, content) => {
					if (err) {
						res.writeHead(500);
						res.end();
					} else {
						res.end(content, 'utf8');
					}
				});
			} catch (err) {
				console.log(err);
			}
		} else {
			res.writeHead(404);
			res.end('file not found');
		}
	});
});
server.listen(port, () => {
	console.log(`server is listening on ${port}`);
});
