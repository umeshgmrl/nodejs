const fs = require('fs');
const path = require('path');

// fs.readFile('hello.txt', { encoding: 'utf8' }, (err, content) => {
// 	if (err) return console.error(err);
// 	console.log(content);
// });

// fs.readFile(
// 	path.resolve(__dirname, 'hello.txt'),
// 	{ encoding: 'utf8' },
// 	(err, content) => {
// 		if (err) return console.error(err);
// 		console.log(content);
// 	}
// );

// fs.readdir(
// 	'C:/Users/user/Desktop/HTML/',
// 	{ encoding: 'utf8' },
// 	(err, content) => {
// 		if (err) return console.error(err);
// 		console.log(content);
// 	}
// );

// let files;
// try {
// 	files = fs.readdirSync('C:/Users/user/Desktop/HTML/');
// 	console.log(files);
// } catch (err) {
// 	console.error(err);
// }

// fs.stat('path/to/file', function(err) {
// 	if (!err) {
// 		console.log('file or directory exists');
// 	} else if (err.code === 'ENOENT') {
// 		console.log('file or directory does not exist');
// 	}
// });

// try {
// 	fs.statSync('hello.txt');
// 	console.log('file or directory exists');
// } catch (err) {
// 	if (err.code === 'ENOENT') {
// 		console.log('file or directory does not exist');
// 	}
// }

// fs.writeFile('hello.txt', 'Hello world!', function(err) {
// 	if (err) return console.error(err);
// });

// fs.unlink('/path/to/file.txt', function(err) {
// 	if (err) console.log(err);
// 	console.log('file deleted');
// });

// fs.unlinkSync('/path/to/file.txt');
// console.log('file deleted');

// fs.appendFile('hello.txt', 'data to append', function(err) {
// 	if (err) throw err;
// 	console.log('Saved!');
// });

// var fd = fs.open('this.txt', 'w', () => {
// 	console.log('success');
// });

// let readable = fs.createReadStream('C:/Users/user/Desktop/this.txt');
// let writable = fs.createWriteStream('C:/Users/user/Desktop/that.txt');
// readable.pipe(writable);
