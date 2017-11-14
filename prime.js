console.log(isPrime(17), Math.random())

/* isPrime() only works if primeNumber > 3 */
function isPrime (primeNumber) {
	/**
	primeNumber: number you want to check if it is prime
	naturalNumber: should be a non-negative integers
	 */
	const naturalNumber1 = (primeNumber - 1) / 6
	const naturalNumber2 = (primeNumber + 1) / 6

	/* checks if the naturalNumbers are a non-negative integer */
	return ( naturalNumber1 % 1 === 0 || naturalNumber2 % 1 === 0) 
}