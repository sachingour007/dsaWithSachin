const arr = [1, 2, 3, 5];

Array.prototype.myFilter = function (callback) {
	if (typeof callback !== "function") {
		throw new Error("Please Enter the Function");
	}

	const result = [];

	for (let i = 0; i < this.length; i++) {
		console.log(callback(this[i], i, this));
		if (callback(this[i], i, this)) {
			result.push(this[i]);
		}
	}

	return result;
};

const result = arr.myFilter((el, index) => {
	return el !== 5;
});

console.log(result);
