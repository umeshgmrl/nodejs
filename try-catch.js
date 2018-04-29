try {
	throw 'some error';
	console.log('hello');
} catch (err) {
	console.log(err);
}
