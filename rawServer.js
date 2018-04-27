const http = require('http');
const PORT = 3000;

//prettier-ignore
http.createServer(function(req, res) {
		res.writeHead(200, {
			'content-type': 'text/html'
		});
		res.end('<h1>Hello World!</h1>');
}).listen(PORT); //dn

console.log(`server started on ${PORT}`);
