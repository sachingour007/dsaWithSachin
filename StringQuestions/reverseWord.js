/*
Question : Reverse Word with Preserve the Whitespace


💡 Approach
Split the string while preserving whitespace using a capturing regex: split(/(\s+)/).
Reverse the characters of each word individually.
Keep the whitespace unchanged.
Join all parts back together.

*/
function reverseWords(str) {
	let strArray = str.split(/(\s+)/);
	return strArray
		.map((part) => (part.trim() ? part.split("").reverse().join("") : part))
		.join("");
}

let ans = reverseWords("  lead   and Trail  ");
