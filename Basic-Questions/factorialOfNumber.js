let num = 5;

function factorialNum(num) {
	if (num <= 1) {
		return 1;
	}

	return num * factorialNum(num - 1);
}

console.log(factorialNum(5));
console.log(factorialNum(0));
console.log(factorialNum(3));
