const BigNumber = require('big-number');

console.log(isBigPrime('32416190071'))

/* checks big numbers */
function isBigPrime (primeNumber) {
	/**
	primeNumber: number you want to check if it is prime
	naturalNumber: should be a non-negative integers
	 */
	const naturalNumber1 = BigNumber(primeNumber).subtract(1).div(6)
	const naturalNumber2 = BigNumber(primeNumber).add(1).div(6)

	/* checks if the naturalNumbers are a non-negative integer */
	return ( naturalNumber1.rest.number[0] == 0 || naturalNumber2.rest.number[0] == 0) 
}

/* isPrime() only works if primeNumber > 3 && primeNumber < 9007199254740991 */
function isPrime (primeNumber) {
	/**
	Euler's: 6n + 1 || 6n - 1
	primeNumber: number you want to check if it is prime
	naturalNumber: should be a non-negative integers
	 */
	const naturalNumber1 = (primeNumber - 1) / 6
	const naturalNumber2 = (primeNumber + 1) / 6

	/* checks if the naturalNumbers are a non-negative integer */
	return ( naturalNumber1 % 1 === 0 || naturalNumber2 % 1 === 0) 
}

/* returns a large string */
function number (bits = 2048){
	let string = ''
	for (let i = 0; i < bits; i++){
		string = string + Math.floor(Math.random() * 10)
	}
	return string
}