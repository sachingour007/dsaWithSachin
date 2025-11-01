let s = "__Hello_world__";

function lengthOfLastWord(s) {
	n = s.length - 1;

	// while (n >= 0) {
	// 	if (s[n] != "_") {
	// 		console.log(s[n]);

	// 		break;
	// 	}
	// 	console.log(--n);
	// 	--n;
	// }

	let count = 0;

	// while (n >= 0) {
	// 	if (s[n] === "_") {
	// 		break;
	// 	}
	// 	n--;
	// 	count++;
	// }

	for (let i = n; i >= 0; i--) {
		if (s[i] !== "_") {
			console.log(s[i]);
			count++;
		} else if (count > 0) {
			break;
		}
	}
	return count;
}

console.log(lengthOfLastWord(s));
