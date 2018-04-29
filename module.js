module.exports = {
	printATable: num => {
		for (let i = 1; i <= 10; i++) {
			console.log(`${num} x ${i} = ${num * i}`);
		}
	},

	printSquare: num => {
		console.log(num ** 2);
	},

	printHello: () => {
		console.log('Hello');
	}
};
