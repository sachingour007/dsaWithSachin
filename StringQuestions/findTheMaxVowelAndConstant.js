let s = "successes";

function findVowelAndConstant(s) {
	const map = new Map();

	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			map.set(s[i], map.get(s[i]) + 1);
		} else {
			map.set(s[i], 1);
		}
	}

	const vowel = ["a", "e", "i", "o", "u"];
	let maxVowel = 0;
	let maxConstant = 0;

	for (let i = 0; i < s.length; i++) {
		
		if (vowel.includes(s[i])) {
			if (map.get(s[i]) > maxVowel) {
				maxVowel = map.get(s[i]);
			}
		} else {
			maxConstant = map.get(s[i]);
		}
	}

	console.log(maxVowel + maxConstant);
}

findVowelAndConstant(s);
