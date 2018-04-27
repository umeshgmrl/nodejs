const http = require('http');
const PORT = 80;

//prettier-ignore
http.createServer(function(req, res) {
		if(req.url==='/api/new-profile'){
			//create a profile
			res.end('<h1>profile saved successfully</h1>')
		}
		if(req.url==='/api/remove-profile'){
			res.end('<h1>profile removed successfully</h1>')
		}
		if(req.url==='/about'){
			res.end('<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quod obcaecati molestias consequatur fugiat. Suscipit odio fugit sed hic incidunt obcaecati et ab sit tenetur sequi. Maxime obcaecati voluptatum repellendus.</h1>')
		}
		if(req.url==='/faq'){
			res.end('<h1>this is faq</h1>')
		}
		if(req.url==='/'){
			res.end(`
				<a href="/about">about</a><br />
				<a href="/faq">/faq</a><br />
				<a href="/api/new-profile">Add new profile</a><br />
				<a href="/api/remove-profile">Remove profile</a><br />
			`)
		}
}).listen(PORT);

console.log(`server started on ${PORT}`);
