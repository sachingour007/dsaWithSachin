const arr = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (callback, initalValue) {
	if (typeof callback !== "function") {
		console.log("callback not a function");
	}
	console.log(this);

	let accumalater = initalValue !== undefined ? initalValue : this[0];
	let startIndecx = initalValue !== undefined ? 0 : 1;

	for (let i = startIndecx; i < this.length; i++) {
		accumalater = +callback(accumalater, this[i], i, this);
	}

	return accumalater;
};

const result = arr.myReduce((acc, el) => {
	return el + acc;
}, 0);

console.log(result);

const user = ["ram", "shym", , "rahul"];

function checkHole(user) {
	for (let i = 0; i < user.length; i++) {
		if(i in user){
            console.log( "yes");
            
        }else{
            console.log( "no");
            
        }
	}
}

checkHole(user);
