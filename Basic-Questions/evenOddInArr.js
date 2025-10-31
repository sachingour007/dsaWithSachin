function countOddEven(arr) {
	let even = 0;
	let odd = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			odd++;
		} else {
			even++;
		}
	}
	return [odd, even];
}

const arr = [1, 2, 3, 4, 5];

countOddEven(arr);

function evenOrOdd(num) {
	if (num % 2 === 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

console.log(evenOrOdd(5));
console.log(evenOrOdd(4));
console.log(evenOrOdd(13));

