function isLeapYear(year) {
	if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
		return "Leap Year";
	} else {
		return "Not a Leap year";
	}
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2020));
