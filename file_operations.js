const fs = require('fs');

//create a file
// fs.open('./hello.txt', 'w', () => {
// 	console.log('opened successfully');
// });

// fs.writeFile('./hello.txt', 'ABCD', (err, ok) => {
// 	if (err) {
// 		console.log(err);
// 	}
// });

// fs.appendFile('./hello.txt', 'File Append', (err, content) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log('success');
// });

// fs.readFile('./hello.txt', { encoding: 'utf8' }, (err, content) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log(content);
// });

// fs.readdir('/', content => {
// 	console.log(content);
// });

fs.unlink('./hello.txt', (err, content) => {
	if (err) {
		console.log(err);
	}
});
