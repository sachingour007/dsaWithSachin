const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback, thisArgs) {
	if (typeof callback !== "function") {
		console.log("CB not a function");
	}
	const newArr = [];
	for (let i = 0; i < this.length; i++) {
		newArr.push(callback.call(thisArgs, this[i], i, this));
	}
	return newArr;
};

const obj = { multi: 2 };

const result = arr.myMap(function (item) {
	return item * 2;
});

console.log(result);
