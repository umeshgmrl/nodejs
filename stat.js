const fs = require('fs');

fs.stat('./test1.js', err => {
	if (err) console.log("file doesn't exist");
	else console.log('file exists');
});
